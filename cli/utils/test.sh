#!/bin/bash

SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )

SEARCH_STRING='PRE-COMMIT'
SEARCH_FILE="$SCRIPT_DIR/.hooks"
source cli/functions/search_string.sh



