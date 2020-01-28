import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { PairsGenerator } from '../core/utils';
import { columns, cellEditProps, getEmptyRowModel } from './helper';
import { useParams } from 'react-router';
import './style.css';

const PairsTable = props => {
  const [rows, setRows] = useState(PairsGenerator());
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { tId } = useParams();
  /*
    TODO: gestire caricamento dati da DB
  */

  function addRow() {
    setIsLoading(() =>
      (async () => {
        const emptyRow = getEmptyRowModel();
        emptyRow.tId = tId ? tId : 1;
        const response = await fetch('/api/pair', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emptyRow)
        });
        const result = await response.json();
        console.log('Pair.table.addRow.result : ', result);
        emptyRow.id = result.id;
        console.log('Pair.table.addRow.emptyRow : ', emptyRow);
        setRows(rows => [emptyRow, ...rows]);
        return false;
      })()
    );
  }

  function deleteRow() {
    setIsLoading(() =>
      (async () => {
        const emptyRow = getEmptyRowModel();
        const response = await fetch('/api/pair', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(selectedRows)
        });
        const result = await response.json();
        emptyRow.id = result.id;
        setRows(rows => rows.filter(row => !selectedRows.find(selectedRow => selectedRow.id === row.id)));
        return false;
      })()
    );
  }

  const rowEvents = {
    onDoubleClick: (e, row, rowIndex) =>
      setRows(rows => [{ id: rows.length, 'pair1.alias': '', 'pair2.alias': '' }, ...rows])
  };

  // Aggiorno la colonna con il giocatore selezionato
  const onSelect = (selectedElement, rowIndex, columnIndex) => {
    console.log('onSelect : ', rowIndex, columnIndex);
    setRows(rows =>
      rows.map(rowElement => {
        if (rowElement.id === rowIndex) {
          const row =
            columnIndex === 1
              ? { id: rowElement.id, pair1: selectedElement, pair2: rowElement.pair2 }
              : { id: rowElement.id, pair1: rowElement.pair1, pair2: selectedElement };
          // update db
          (async () => {
            const response = await fetch('/api/pair', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(row)
            });
            const result = await response.json();
          })();
          return row;
        } else return rowElement;
      })
    );
  };

  const handleSelect = (row, isSelected) => {
    setSelectedRows(selectedRows => {
      const found = selectedRows.find(e => e.id === row.id) ? true : false;
      if (isSelected) {
        return found ? selectedRows : [row, ...selectedRows];
      } else {
        return found ? selectedRows.filter(e => e.id !== row.id) : selectedRows;
      }
    });
  };

  const selectRow = {
    mode: 'checkbox',
    onSelect: handleSelect,
    onSelectAll: (isSelected, rows) => rows.forEach(row => handleSelect(row, isSelected)),
    style: { backgroundColor: '#c8e6c9' }
  };

  //console.log('selectedRows : ', selectedRows);
  return (
    <>
      <Button variant="success" onClick={addRow}>
        Aggiungi Coppia
      </Button>
      <Button variant="danger" onClick={deleteRow}>
        Elimina Coppia
      </Button>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={rows}
        columns={columns(onSelect)}
        rowEvents={rowEvents}
        cellEdit={cellEditProps}
        selectRow={selectRow}
        noDataIndication="Nessun dato reperito"
        wrapperClasses="player-table"
        headerClasses="player-table-header"
        striped
        hover
      />
    </>
  );
};

export default PairsTable;
