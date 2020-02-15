import React from 'react';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import PlayerSelect from '../Player/select';

export const columns = onSelect => [
  { dataField: 'id', text: 'ID', editable: false, hidden: true, align: () => 'center' },
  { dataField: 'rowNumber', text: 'ID', editable: false, align: () => 'center' },
  {
    dataField: 'player1.alias',
    text: 'Giocatore 1',
    align: () => 'center',
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
      <PlayerSelect
        {...editorProps}
        id={columnIndex}
        row={row}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        value={value}
        onSelect={onSelect}
      />
    )
  },
  {
    dataField: 'player2.alias',
    text: 'Giocatore 2',
    align: () => 'center',
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
      <PlayerSelect
        {...editorProps}
        id={columnIndex}
        row={row}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        value={value}
        onSelect={onSelect}
      />
    )
  },
  { dataField: 'pairAlias', text: 'Alias Coppia' },
  {
    dataField: 'stage1Name',
    text: 'Nome girone',
    align: () => 'center'
  },
  {
    dataField: 'paid',
    text: 'Pagato',
    align: () => 'center',
    editor: {
      type: Type.CHECKBOX,
      value: 'Si:No'
    },
    /*
    formatter: (cell, row, rowIndex) => {
      console.log(cell);

      return (
        <InputGroup>
          <InputGroup.Checkbox style={{ margin: 'auto' }} onCancechecked={cell}></InputGroup.Checkbox>
        </InputGroup>
      );
    },*/
    style: (content, row, rowIndex, columnIndex) => {
      if (!row.paid) return { backgroundColor: '#ff695c' };
    }
  }
];

export const cellEditProps = cellEditFactory({
  mode: 'click',
  blurToSave: true,
  afterSaveCell: (oldValue, newValue, row, column) => {
    // Aggiornamento per queste due colonne viene eseguito dalla funzione onSelect
    if (column.dataField === 'player1.alias' || column.dataField === 'player2.alias') return;
    (async () => {
      const response = await fetch('/api/pair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(row)
      });
      await response.json();
    })();
  }
});

export function getEmptyRowModel() {
  return {
    id: null,
    rowNumber: null,
    tId: null,
    player1: { id: null, alias: '', name: '', surname: '' },
    player2: { id: null, alias: '', name: '', surname: '' },
    pairAlias: '',
    stage1Name: '',
    paid: 'No'
  };
}

export const fetchPairs = (setIsLoading, setterFunction, tId) => {
  (async () => {
    setIsLoading(true);
    const response = await fetch(`/api/pair/list/?tId=${tId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    setterFunction(result);
    setIsLoading(false);
  })();
};

export function valueFormatter(selectedOption) {
  if (selectedOption.pairAlias && selectedOption.pairAlias !== '')
    return `${selectedOption.pairAlias} ( ${selectedOption.id} )`;
  return createAlias(selectedOption);
}

export function createAlias(selectedOption) {
  let value = `${selectedOption.rowNumber} : `;
  const { player1, player2, id } = selectedOption;
  value += player1.alias ? player1.alias : player1.name;
  value += ' - ' + player2.alias ? player2.alias : player2.name;
  value += ` ( ${id} )`;
  return value;
}

export function getEmptyPlayer() {
  return {
    id: null,
    name: '',
    surname: '',
    alias: ''
  };
}
