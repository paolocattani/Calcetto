import React from 'react';
import { Modal, Spinner, Toast, Alert } from 'react-bootstrap';

// Loading Modal
type loadingModalPropsType = {
  show: boolean;
  message: string;
  onHide?: () => void;
};

export const LoadingModal: React.FC<loadingModalPropsType> = ({
  message,
  show,
  onHide = () => (show = false)
}: loadingModalPropsType) => (
  <Modal show={show} onHide={onHide} size="xl" centered>
    <Modal.Header closeButton>
      <Modal.Title>Caricamento....</Modal.Title>
    </Modal.Header>
    <Modal.Body>{message}</Modal.Body>
    <Modal.Footer>
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="dark" />
    </Modal.Footer>
  </Modal>
);

// Toasts
type toastPropsType = {
  message: string;
  type?: 'success' | 'warning' | 'danger';
};

export const GenericToast: React.FC<toastPropsType> = ({ message, type }: toastPropsType) =>
  message && message !== '' ? (
    <Toast className="rounded mr-2 mx-auto" key={`${type}-message`} show={message !== ''}>
      <Toast.Header closeButton={false}>
        <strong>Operazione completata !</strong>
      </Toast.Header>
      <Toast.Body>
        <Alert variant={type}>{message}</Alert>
      </Toast.Body>
    </Toast>
  ) : null;
