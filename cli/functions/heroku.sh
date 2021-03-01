## Show Help
showHelp_heroku() {
cat << EOF
    Usage: cli.sh build [option]

    options :
        --postbuild         Heroku postbuild command
        --prebuild          Heroku prebuild command
        --cleanup           Heroku cleanup command
        --start             Heroku start command
        -d , --deploy       Deploy current branch
        -p , --prod         Deploy on production env

EOF
}

function heroku_cli {

    deploy=0;
    destination='heroku-staging';
    start=0;
    prebuild=0;
    postbuild=0;
    cleanup=0;

    while [[ $# -gt 0 ]]
    do
        case "$1" in
            -d|--deploy)
            deploy=1;
            shift
            ;;
            -s|--start)
            start=1;
            shift
            ;;
            --cleanup)
            cleanup=1;
            shift
            ;;
            --prebuild)
            prebuild=1;
            shift
            ;;
            --postbuild)
            postbuild=1;
            shift
            ;;
            -p|--prod)
            destination='heroku-production';
            shift
            ;;
            -h|--help)
            showHelp_heroku
            exit 0
            ;;
            *)
            shift
            ;;
        esac
    done

    # Show help if no option selected
    if  [[ $deploy -eq 0 ]] && [[ $start -eq 0 ]] && [[ $prebuild -eq 0 ]] && [[ $postbuild -eq 0 ]] && [[ $cleanup -eq 0 ]]; then
        showHelp_heroku
        exit 0
    fi

    # Deploy to Heroku
    if [[ $deploy -eq 1 ]]; then
        echo "Start deploy on Heroku"
        # Get current branch name
        branchName=$(git rev-parse --abbrev-ref HEAD)

        # https://stackoverflow.com/questions/1885525/how-do-i-prompt-a-user-for-confirmation-in-bash-script
        echo "You're going to push branch $(text_color $branchName $blue) to $(text_color $destination $red)"
        read -p "Continue ? ( y/n ) : " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            # Deploy
            echo "Deploy $branchName to $destination..."
            git push $destination $branchName:master
        else
            echo "Aborted.."
        fi
    fi

    # https://devcenter.heroku.com/articles/nodejs-support
    # Heroku prebuild commands
    # "This runs before Heroku installs dependencies"
    if [[ $prebuild -eq 1 ]]; then
        echo " --------------> Prebuild"
        # Uninstall cypress to speed up build process
        npm uninstall cypress @cypress/code-coverage @cypress/instrument-cra @cypress/webpack-preprocessor \
            cypress-intellij-reporter cypress-plugin-snapshots cypress-skip-and-only-ui cypress-watch-and-reload

        cd server
        npm ci
        ./node_modules/.bin/pm2 install pm2-intercom
        echo " --------------> Prebuild Done"
    fi

    # Heroku postbuild
    # This option runs after heroku buid to start the application
    # Given that :
    #   default buildpack installs frontend dependencies
    #   heroku-prebuild installs server dependecies and pm2
    #
    # We just have to :
    #   - build frontend
    #   - transpile server
    # "This runs after Heroku installs dependencies, but before Heroku prunes and caches dependencies."
    # "If the package.json has a build script that needs to be customized for Heroku, define a heroku-postbuild script, which will run instead of the build script."
    if [[ $postbuild -eq 1 ]]; then
        echo " --------------> Build frontend"
        npm run CRA:build

        echo " --------------> Build server"
        cd server
        npm run build

        echo " --------------> Create destination folder"
        mkdir production_build

        echo " --------------> Copy files"
        cp -r build server/build_server/* ./production_build
        cp .env* ./production_build
        cp server/ecosystem.config.prod.js ./production_build/ecosystem.config.js
        cp server/package*.json ./production_build/server

        echo " --------------> We are we ?"
        pwd
        ls -ls
        echo " --------------> Ok"

        cd ./production_build/server
        npm install --only=prod
        cd ..

    fi

    # "This runs after Heroku prunes and caches dependencies."
    if [[ $cleanup -eq 1 ]]; then
        echo " --------------> Remove everything except build folder"
        rm -vrf !production_build
        cp production_build/* .
        cp production_build/.env* .
        cp production_build/ecosystem.config.prod.js ./ecosystem.config.js
        cp production_build/server/package*.json ./server
        rm -rf production_build
        echo " --------------> We are we ?"
        pwd
        ls -ls
        echo " --------------> Ok"
    fi

    #
    if [[ $start -eq 1 ]]; then
        pm2-runtime start ecosystem.config.js
    fi
    exit 0
}

