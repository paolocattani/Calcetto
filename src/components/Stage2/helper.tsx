import { getBaseLog } from '../core/utils';
import { ICell } from 'models/stage2.model';

/*
	_______________________________________________________________________
	| n.   |                      |                   |                   |
	| Riga |     16 coppie        |     8 Coppie      |   4 Coppie        |
	|______|______________________|___________________|___________________|
	|	     |	( rowSpan )		      |		( rowSpan )	    |	   ( rowSpan )    |
	|      | 	                    |                   |                   |   Escludendo il primo elemento e ossevando le righe da 2 a 32 si
	|  1   | 1 - 2 - 4 - 8 - 16   | 1 - 2 - 4 - 8     | 1 - 2 - 4         |  	può notare che la seguenza ha la forma di una piramide.
	|  2   | 1                    | 1                 | 1                 |  	Esempio N= 32 :
	|  3   | 1 - 2                | 1 - 2             | 1 - 2             |
	|  4   | 1                    | 1                 | 1                 |  		     | 6
	|  5   | 1 - 2 - 4            | 1 - 2 - 4         |                   |  	       |                                 5
	|  6   | 1                    | 1                 |                   |  	       |                 4                               4
	|  7   | 1 - 2                | 1 - 2             |                   |  	       |         3               3               3               3
	|  8   | 1                    | 1                 |                   |  	       |     2       2       2       2       2       2       2       2
	|  9   | 1 - 2 - 4 - 8        |                   |                   |          |   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1   1
	|  10  | 1                    |                   |                   |     _____|___________________________________________________________________
	|  11  | 1 - 2                |                   |                   |     n.   | 1 2 3 4 5 6 7 8 9 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 3 3 3
	|  12  | 1                    |                   |                   |		Riga |                     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2
	|  13  | 1 - 2 - 4            |                   |                   |
	|  14  | 1                    |                   |                   |
	|  15  | 1 - 2                |                   |                   |
	|  16  | 1                    |                   |                   |
	|______|______________________|___________________|___________________|


Posso calcolare un array contenente il numero di elementi che ogni riga deve contenere.

Dato:
	- N  : numero di righe ( = 32 )
	- currentMax : valore da assegnare alla seguenza corrente ( 1, 2 ,3, 4, 5, 6, .... )
	- jj : il numero di multipli da calcolare per ogni seguenza ( jj <= N )

Partendo ad esempio da un array vuoto di lunghezza N:
	- Se l'elemento con indice "ii" dell'array non contiene nessun valore allora gli assegno "currentMax".
	- Il fattore distanziale tra un elemento e l'altro è : growFactor = Math.pow(2, currentMax);
	- Tutti gli elementi con indice jj = ii + growFactor * jj hanno quindi valore "currentMax"

Il rowSpan da assegnare al singolo elemento è calcolato come 2^jj. ( 0<=jj<= N+1 )


*/
export const getIndexes = (pairsNumber: number): number[] => {
  const N = getBaseLog(2, pairsNumber) + 1; // Numero massimo di elementi td
  /*
   * Array per mappare numero riga a numero di elementi td
   * Inizializzo come primo NaN solo per avere un placeholder all'index 0  e iniziare l'analisi da 1
   */
  let indexes = [NaN, N];
  let currentMax = 1;
  for (let ii = 1; ii <= pairsNumber; ii++) {
    if (!indexes[ii]) {
      indexes[ii] = currentMax;
      let growFactor = Math.pow(2, currentMax);
      for (let jj = 1; ii + growFactor * jj < pairsNumber + 1; jj++) indexes[ii + growFactor * jj] = currentMax;
      currentMax++;
    }
  }
  return indexes;
};

export const getEmptyCell = (name?: string): ICell => ({
  name: '',
  winner: false,
  id: 0,
  parentId: 0,
});

// Genera la struttura per Stage2
export const generateStructure = (rowNumber: number): ICell[][] => {
  const N = getBaseLog(2, rowNumber) + 1;
  let counter = rowNumber * 2;
  const result = new Array(N).fill([]).map((e, ii) => {
    counter /= 2;
    let bounce = true;
    let index = 0;
    let temp: ICell[] = [];
    for (let jj = 0; jj < counter; jj++) {
      if (bounce) index++;
      bounce = !bounce;
      temp.push({
        id: index,
        parentId: ii === 0 ? 0 : jj + 1,
        name: `${ii}-${jj + 1}`,
        pair: undefined,
        winner: false,
      });
    }
    return [...temp];
  });
  console.log('generateStructure : ', result);

  return result;
};
