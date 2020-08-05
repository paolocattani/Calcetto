import React from 'react';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import PlayerSelect from '../Player/select';
import { customStyles } from './helper';

const ALIGN_CENTER = 'center';
const YES = 'Si';
const NO = 'No';

const playerSelection = (editorProps, value, row, rowIndex, columnIndex, onSelect, options) => (
  <PlayerSelect
    {...editorProps}
    id={columnIndex}
    row={row}
    rowIndex={rowIndex}
    columnIndex={columnIndex}
    value={value}
    onSelect={onSelect}
    options={options}
    styles={customStyles}
  />
);

const checkBoxProps = {
  align: () => ALIGN_CENTER,
  headerStyle: (column, colIndex) => ({ width: '7,5%' }),
  editor: {
    type: Type.CHECKBOX,
    value: `${YES}:${NO}`,
  },
  style: (content, row, rowIndex, columnIndex) => (content !== NO ? { backgroundColor: '#ffbf47' } : null),
};

export const columns = (onSelect, options) => [
  { dataField: 'id', text: 'ID', editable: false, hidden: true, align: () => ALIGN_CENTER },
  { dataField: 'rowNumber', text: 'ID', editable: false, align: () => ALIGN_CENTER },
  {
    dataField: 'player1.alias',
    text: 'Giocatore 1',
    align: () => ALIGN_CENTER,
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) =>
      playerSelection(editorProps, value, row, rowIndex, columnIndex, onSelect, options),
    headerStyle: (column, colIndex) => ({ width: '20%' }),
  },
  {
    dataField: 'player2.alias',
    text: 'Giocatore 2',
    align: () => ALIGN_CENTER,
    editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) =>
      playerSelection(editorProps, value, row, rowIndex, columnIndex, onSelect, options),
    headerStyle: (column, colIndex) => ({ width: '20%' }),
  },
  { dataField: 'alias', text: 'Alias Coppia', headerStyle: (column, colIndex) => ({ width: '25%' }) },
  {
    dataField: 'stage1Name',
    text: 'Nome girone',
    align: () => ALIGN_CENTER,
    headerStyle: (column, colIndex) => ({ width: '10%' }),
    editor: {
      type: Type.SELECT,
      options: 'abcdefghijklmnopqrstuvwxyz'
        .toUpperCase()
        .split('')
        .map((e) => ({ value: e, label: e })),
    },
  },
  {
    dataField: 'paid1',
    text: 'Pagato 1',
    ...checkBoxProps,
  },
  {
    dataField: 'paid2',
    text: 'Pagato 2',
    ...checkBoxProps,
  },
];

export const cellEditProps = (editable) =>
  cellEditFactory({
    mode: editable ? 'click' : 'none',
    blurToSave: true,
    afterSaveCell: (oldValue, newValue, row, column) => {
      // Aggiornamento per queste due colonne viene eseguito dalla funzione onSelect
      if (column.dataField === 'player1.alias' || column.dataField === 'player2.alias') return;
      (async () => {
        const response = await fetch('/api/v1/pair', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(row),
        });
        await response.json();
      })();
    },
  });