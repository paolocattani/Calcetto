import React from 'react';
import { Button } from 'react-bootstrap';
import { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';
import { getEmptyPlayer } from 'services/player.service';

// options for role column
const selectOptions = {
  Portiere: 'Portiere',
  Attaccante: 'Attaccante',
  Master: 'Master',
};

// Filter
let nameFilter;
let surnameFilter;
let aliasFilter;
let roleFilter;
let emailFilter;
let phoneFilter;

export function clearAllFilter() {
  nameFilter('');
  surnameFilter('');
  aliasFilter('');
  roleFilter('');
  emailFilter('');
  phoneFilter('');
}

// Columns default
const playerColumns = (isEditable) => [
  { dataField: 'id', text: 'ID', editable: false, headerStyle: (column, colIndex) => ({ width: '3%' }) },
  {
    dataField: 'name',
    text: 'Nome',
    headerClasses: 'player-table-header-element',
    autoSelectText: true,
    headerStyle: (column, colIndex) => ({ width: isEditable ? '16%' : '25%' }),
    filter: textFilter({
      placeholder: 'Filtra...',
      getFilter: (filter) => (nameFilter = filter),
    }),
  },
  {
    dataField: 'surname',
    text: 'Cognome',
    headerClasses: 'player-table-header-element',
    autoSelectText: true,
    headerStyle: (column, colIndex) => ({ width: isEditable ? '16%' : '25%' }),
    filter: textFilter({
      placeholder: 'Filtra...',
      getFilter: (filter) => (surnameFilter = filter),
    }),
  },
  {
    dataField: 'alias',
    text: 'Alias',
    headerClasses: 'player-table-header-element',
    headerStyle: (column, colIndex) => ({ width: isEditable ? '17%' : '25%' }),
    autoSelectText: true,
    filter: textFilter({
      placeholder: 'Filtra...',
      getFilter: (filter) => (aliasFilter = filter),
    }),
  },
  {
    dataField: 'role',
    text: 'Roulo',
    headerClasses: 'player-table-header-element',
    headerStyle: (column, colIndex) => ({ width: `${isEditable ? '11' : '15'}%` }),
    filter: selectFilter({
      placeholder: 'Filtra...',
      options: selectOptions,
      getFilter: (filter) => (roleFilter = filter),
    }),
    editor: {
      type: Type.SELECT,
      getOptions: (_) => {
        return [
          { value: 'Portiere', label: 'Portiere' },
          { value: 'Attaccante', label: 'Attaccante' },
          { value: 'Master', label: 'Master' },
        ];
      },
    },
  },
  {
    dataField: 'email',
    text: 'Email',
    headerStyle: (column, colIndex) => ({ width: '20%' }),
    headerClasses: 'player-table-header-element',
    autoSelectText: true,
    hidden: !isEditable,
    filter: textFilter({
      placeholder: 'Filtra...',
      getFilter: (filter) => (emailFilter = filter),
    }),
  },
  {
    dataField: 'phone',
    headerStyle: (column, colIndex) => ({ width: '10%' }),
    text: 'Telefono',
    headerClasses: 'player-table-header-element',
    autoSelectText: true,
    hidden: !isEditable,
    filter: textFilter({
      placeholder: 'Filtra...',
      getFilter: (filter) => (phoneFilter = filter),
    }),
  },
  { dataField: 'match_played', text: 'Partite Giocate', hidden: true },
  { dataField: 'match_won', text: 'Vittorie', hidden: true },
  { dataField: 'total_score', text: 'Punteggio', hidden: true },
];

export default playerColumns;

// Custom export button
export const ExportCSVButton = (props) => {
  return (
    <Button disabled className="btn btn-success" onClick={() => props.onExport()}>
      Esporta in CSV
    </Button>
  );
};

export const fetchPlayers = (setterFunction, tId) => {
  (async () => {
    const response = await fetch(tId ? `/api/v1/player/list/${tId}` : '/api/v1/player/list', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const model = [...result, getEmptyPlayer('Nessun Giocatore')];
    console.log('fetchPlayers.result : ', model);
    setterFunction(model);
  })();
};

export function valueFormatter(selectedOption) {
  let value = '';
  if (!selectedOption) return '';
  if (selectedOption.alias) {
    value = selectedOption.alias;
  } else {
    value = selectedOption.surname ? `${selectedOption.name} - ${selectedOption.surname}` : selectedOption.name;
  }
  return value;
}
