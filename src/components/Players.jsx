// https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/editing/

// TODO: add Hamoni to sync client
// https://github.com/pmbanugo/realtime-react-datatable

// TODO: bootstrap table
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Cell%20Editing&selectedStory=Click%20to%20Edit&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
// https://github.com/react-bootstrap-table/react-bootstrap-table2

import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { productsGenerator } from './core/utils';
import GenericForm from './core/GenericForm';
import { IInputOptions } from './types/InputOptions';
// react-bootstrap-table
import { Button } from 'react-bootstrap';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList: [],
      rows: productsGenerator(),
      selectedRows: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('/api/player/list', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    console.table(result);
    this.setState({ playersList: result });
  }

  onSubmit(event, formState) {
    console.log('formSubmit : ', formState);
  }

  handleOnSelect = (row, isSelect) => {
    console.log('handleOnSelect.selectedRows : ', this.state.selectedRows);
    this.setState(state => {
      return { selectedRows: [...this.state.selectedRows, row] };
    });
    return true; // return true or dont return to approve current select action
  };

  rowEvents = {
    // Add 1 row
    onDoubleClick: (e, row, rowIndex) => {
      this.setState(state => {
        return { rows: [emptyRow, ...state.rows] };
      });
    }
  };

  render() {
    const columns = [
      { dataField: 'id', text: 'ID', editable: false },
      { dataField: 'name', text: 'Nome' },
      { dataField: 'surname', text: 'Cognome' },
      { dataField: 'alias', text: 'Vero Nome' },
      {
        dataField: 'role',
        text: 'Roulo',
        editor: {
          type: Type.SELECT,
          options: [
            { value: 'goalkeeper', label: 'Portiere' },
            { value: 'striker', label: 'Attaccante' },
            { value: 'both', label: 'Master' }
          ]
        }
      }
    ];

    const cellEditProps = cellEditFactory({
      mode: 'click',
      blurToSave: true
      // afterSave : save data to Db
    });

    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      hideSelectAll: true,
      onSelect: this.handleOnSelect
    };

    const { rows } = this.state;
    return (
      <>
        <Button onClick={this.rowEvents.onDoubleClick}> Aggiungi giocatore </Button>
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
          rowEvents={this.rowEvents}
          cellEdit={cellEditProps}
          selectRow={selectRow}
          noDataIndication="Nessun dato reperito"
          striped
          hover
        />
      </>
    );
  }
}

const emptyRow = { id: 0, name: '', surname: '', alias: '', role: '' };

/*
{
  name: { label: 'Nome', placeholder: 'Nome' },
  surname: { label: 'Cognome', placeholder: 'Cognome' },
  alias: { label: 'Soprannome', placeholder: 'Soprannome' },
  ruolo: { label: 'Ruolo', placeholder: 'Ruolo' }
};
*/
