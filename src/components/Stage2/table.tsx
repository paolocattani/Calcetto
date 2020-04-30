import React from 'react';
import style from './style.module.css';
import { getIndexes, getEmptyCell } from './helper';
import Cell from './cell';
import { getBaseLog } from 'components/core/utils';
import { ICell, PairDTO } from 'models';
import { FormControl } from 'react-bootstrap';
import PairsSelect from 'components/Pair/select';

// https://www.kodbiro.com/blog/rorgchart-react-module-for-displaying-and-editing-data-in-org-chart/

interface Stage2Props {
  pairs: PairDTO[];
  elements: ICell[][];
  rowNumber: number;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    rowIndex: number,
    colIndex: number,
    winner: boolean
  ) => void;
}

const Stage2: React.FC<Stage2Props> = ({ onClick, elements, rowNumber = 16, pairs }) => {
  // useEffect(() => setInternal(elements), [elements]);

  if (rowNumber % 8 !== 0 || !elements) {
    return <p>Picche</p>;
  }
  /*
   * Calcolo il numero di colonne in funzione del numero di righe
   * in quanto l'oggetto che ricevo protrebbe essere solo un parziale
   */
  const colNumber = getBaseLog(2, rowNumber) + 1;
  const bRows = getTableBodyRows(elements, rowNumber, colNumber, onClick, pairs);
  const hElem = getTableHeaderElements(colNumber);

  return (
    <table className={style.table}>
      <thead>
        <tr>{hElem}</tr>
      </thead>
      <tbody className={style.body}>{bRows}</tbody>
    </table>
  );
};

export default Stage2;

function getTableHeaderElements(colNumber: number): JSX.Element[] {
  const tds: JSX.Element[] = [];
  for (let ii = 1; ii <= colNumber; ii++) {
    tds.push(
      <td key={`header ${ii}`} className={style.headerCell}>
        <strong>{`Stage-${ii}`}</strong>
      </td>
    );
  }
  return tds;
}

function getTableBodyRows(
  elements: ICell[][],
  rowNumber: number,
  colNumber: number,
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    rowIndex: number,
    colIndex: number,
    winner: boolean
  ) => void,
  pairs: PairDTO[]
): JSX.Element[] {
  // Conterrà tutte le righe della tabella
  const rows: JSX.Element[] = [];
  // Indice di riga progressivo
  const counter = new Array<number>(colNumber).fill(0);
  // Sequenza numero di elementi da aggiungere alla riga
  const index: number[] = getIndexes(rowNumber);

  const renderCustomComponent = (rowIndex: number, colIndex: number, isLast: boolean, pair?: PairDTO) => (
    <PairsSelect options={pairs} />
  );

  for (let ii = 1; ii <= rowNumber; ii++) {
    const row: JSX.Element[] = [];
    for (let jj = 0; jj < index[ii]; jj++) {
      counter[jj] += 1;
      const cell = elements[jj] ? elements[jj][counter[jj] - 1] : getEmptyCell();
      row.push(
        <Cell
          renderCustomComponent={jj === 0 ? renderCustomComponent : undefined}
          key={`cell : ${jj}-${counter[jj] - 1}`}
          span={Math.pow(2, jj)}
          rowIndex={counter[jj]}
          colIndex={jj + 1}
          onClick={onClick}
          buttonDisabled={isButtonDisabled(counter[jj], jj, elements)}
          isLast={elements[jj].length === 1}
          {...cell}
        />
      );
    }
    rows.push(
      <tr key={`row : ${ii}`} className={style.row}>
        {row}
      </tr>
    );
  }
  return rows;
}

/*
  Il button per impostare la coppia vincente è abilitato solo se entrambe le cell hanno una coppia assegnata
*/
const isButtonDisabled = (rowIndex: number, colIndex: number, elements: ICell[][]) =>
  elements[colIndex].length === 1 ||
  (rowIndex % 2 !== 0
    ? !elements[colIndex][rowIndex - 1].pair || (elements[colIndex][rowIndex] && !elements![colIndex][rowIndex].pair)
    : !elements[colIndex][rowIndex - 1].pair ||
      (elements[colIndex][rowIndex - 2] && !elements[colIndex][rowIndex - 2].pair));
