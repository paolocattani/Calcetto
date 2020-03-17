import React, { useState } from 'react';
import { useSessionContext } from 'components/core/SessionContext';
import { useHistory } from 'react-router-dom';
import { IRegisterForm, IRegisterFormValue, ILoginFormValue } from './types';
import { FormikHelpers } from 'formik';
import { Modal, Button, Container, Row, Alert } from 'react-bootstrap';
import Register from './Register';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

type authType = {
  show: boolean;
  onHide: () => void;
};

const AuthWrapper = ({ show, onHide }: authType): JSX.Element => {
  // State
  const [register, setRegister] = useState(false); // Mostra form registrazione/login
  const [errorMessage, setErrorMessage] = useState('');

  const [sessionContext, updateSessionContext] = useSessionContext();
  const currentHistory = useHistory();

  const RigthArrowDefinition: IconDefinition = findIconDefinition({
    prefix: 'far',
    iconName: 'arrow-alt-circle-right'
  });

  const onSubmitLogin = async (values: ILoginFormValue, { setSubmitting }: FormikHelpers<ILoginFormValue>) => {
    setSubmitting(true);
    const response = await fetch('/api/v1/auth/authenticate', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    setSubmitting(false);
    updateSessionContext({ ...sessionContext, isAuthenticated: true });
    currentHistory.push('/');
  };

  const passwordRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
  const phoneRegExp = new RegExp('^d{10}$');
  const emailRegExp = new RegExp(
    // eslint-disable-next-line quotes
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );

  const isValidRegister = (formValues: IRegisterFormValue): boolean => {
    setErrorMessage('');
    // Nome
    if (!formValues.name) {
      setErrorMessage('Inserisci il nome');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }
    // Telefono
    if (!formValues.surname) {
      setErrorMessage('Inserisci il cognome');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    // Test password
    if (
      !formValues.password ||
      !formValues.passwordConfirm ||
      !passwordRegExp.test(formValues.password) ||
      !passwordRegExp.test(formValues.passwordConfirm)
    ) {
      setErrorMessage('La password non rispetta i criteri');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    if (formValues.password !== formValues.passwordConfirm) {
      setErrorMessage('Le password non corrispondono');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    // Test email
    if (
      !formValues.email ||
      !formValues.emailConfirm ||
      !emailRegExp.test(formValues.email) ||
      !emailRegExp.test(formValues.emailConfirm)
    ) {
      setErrorMessage('Inserisci una email valida');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    if (formValues.email !== formValues.emailConfirm) {
      setErrorMessage('Le email non corrispondono');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    // Telefono
    if (!(formValues.phone && !phoneRegExp.test(formValues.phone))) {
      setErrorMessage('Il numero di telefono inserito non è valido');
      setTimeout(() => setErrorMessage(''), 3000);
      return false;
    }

    return true;
  };

  const onSubmitRegister = async (values: IRegisterFormValue, { setSubmitting }: FormikHelpers<IRegisterFormValue>) => {
    setSubmitting(true);
    try {
      console.log('onSubmitRegister : ', values);
      if (!isValidRegister(values)) return;
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      if (response.ok && result) {
        updateSessionContext({
          ...sessionContext,
          name: result.name,
          surname: result.surname,
          email: result.email,
          role: result.role,
          isAuthenticated: true
        });
        onHide();
        currentHistory.push('/');
      } else {
        setErrorMessage('Errore durante il processo di registrazione. Riprovare piu tardi');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    } catch (error) {
      setErrorMessage('Errore durante il processo di registrazione. Riprovare piu tardi');
      setTimeout(() => setErrorMessage(''), 3000);
    }
    setSubmitting(false);
  };

  const title = register ? 'Registrati' : 'Login';
  const body = register ? <Register onSubmit={onSubmitRegister} /> : <Login onSubmit={onSubmitLogin} />;
  const buttonString = register ? 'Login' : 'Registrati';
  const Icon = <FontAwesomeIcon icon={RigthArrowDefinition} />;
  return (
    <Modal show={show} onHide={onHide} size={'lg'} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          {errorMessage ? (
            <Alert key={'auth-alert'} variant={'danger'}>
              {errorMessage}
            </Alert>
          ) : null}
          {body}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setRegister(!register)}>
          <div>
            {Icon} <strong>{buttonString}</strong>
          </div>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthWrapper;