import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

// Date picker
import DatePicker from 'react-datepicker';
import { getEmptyTournament } from './helper';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TournamentAction } from 'redux/actions/tournament.action';
import { toast } from 'react-toastify';
import { FormEventType } from 'components/core/generic/CommonTypes';
import { isValidTournament } from 'redux/services/tournament.service';

type newTProps = {};

const NewTournament: React.FC<newTProps> = (_) => {
  let currentHistory = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [visible, setVisible] = useState<boolean>(true);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    if (!name) {
      toast.error('Inserire un nome per il torneo');
      return;
    }

    let model = getEmptyTournament(name);
    model.date = date;
    model.public = visible;
    const { isValid, errorMessage } = await isValidTournament({ model });
    if (isValid) {
      dispatch(TournamentAction.saveTournament.request({ model, history: currentHistory }));
    } else {
      toast.error(errorMessage);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col md={6}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Nome Torneo"
              maxLength={30}
              value={name}
              onChange={(event: React.FormEvent<FormEventType>) => setName(event.currentTarget.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Data</Form.Label>
            <Form.Control
              as={() => (
                <DatePicker
                  highlightDates={[new Date()]}
                  locale="it"
                  selected={date}
                  dateFormat="dd/MM/yyyy"
                  onChange={(newValue) => setDate(newValue ? newValue : new Date())}
                />
              )}
            ></Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="visible">
            <Form.Label>Visibilità </Form.Label>
            <Form.Control as="select" onChange={() => setVisible(!visible)}>
              <option>Pubblico</option>
              <option>Privato</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button type="submit" size="lg" variant="outline-warning" className="float-right default-color-white">
            <span style={{ fontSize: 'larger', fontWeight: 'bolder' }}>Prosegui</span>
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default NewTournament;
