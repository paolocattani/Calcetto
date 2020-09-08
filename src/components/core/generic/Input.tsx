import React from 'react';
import { Form } from 'react-bootstrap';
import { FormEventType } from './CommonTypes';

interface InputFieldProps {
  controlId: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: any;
  onChange: (event: React.ChangeEvent<FormEventType>) => void;
  validFeedback?: string;
  invalidFeedback?: string;
}
export const InputField: React.FC<InputFieldProps> = ({
  controlId,
  label,
  placeholder,
  type,
  required,
  value,
  onChange,
  validFeedback,
  invalidFeedback,
}) => (
  <Form.Group controlId={controlId}>
    {label ? <Form.Label>{label}</Form.Label> : null}
    <Form.Control
      required={required}
      type={type || 'text'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {validFeedback ? <Form.Control.Feedback>{validFeedback}</Form.Control.Feedback> : null}
    {invalidFeedback ? <Form.Control.Feedback type="invalid">{invalidFeedback}</Form.Control.Feedback> : null}
  </Form.Group>
);