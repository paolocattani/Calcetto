import React from 'react';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import PlayerSelect from '../Player/select.component';
import { updatePair } from '../../redux/services/pair.service';
import { customStyles } from './helper';

import { ToggleButton, ButtonGroup } from 'react-bootstrap';

const ALIGN_CENTER = 'center';

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

const isEditable = (row) => !!(row.player1 && row.player1.id && row.player2 && row.player2.id);
const checkBoxProps = {
	align: () => ALIGN_CENTER,
	headerStyle: () => ({ width: '7,5%' }),
	editable: (cell, row) => isEditable(row),
	editor: {
		type: Type.CHECKBOX,
		value: 'true:false',
	},
	formatter: (cell /*, row, rowIndex, formatExtraData*/) => (
		<ButtonGroup toggle className="mb-2">
			<ToggleButton variant={!!cell ? 'success' : 'danger'} checked={cell} value="1" type="checkbox">
				{!!cell ? 'Pagato' : 'Non Pagato'}
			</ToggleButton>
		</ButtonGroup>
	),
	//style: (content, row, rowIndex, columnIndex) => (content !== NO ? { backgroundColor: '#ffbf47' } : null),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const columns = (onSelect, options, labels) => [
	{ dataField: 'id', text: 'ID', editable: false, hidden: true, align: () => ALIGN_CENTER },
	{ dataField: 'rowNumber', text: 'ID', editable: false, align: () => ALIGN_CENTER },
	{
		dataField: 'player1.alias',
		text: labels.player1,
		align: () => ALIGN_CENTER,
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) =>
			playerSelection(editorProps, value, row, rowIndex, columnIndex, onSelect, options),
		headerStyle: () => ({ width: '20%' }),
	},
	{
		dataField: 'player2.alias',
		text: labels.player2,
		align: () => ALIGN_CENTER,
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) =>
			playerSelection(editorProps, value, row, rowIndex, columnIndex, onSelect, options),
		headerStyle: () => ({ width: '20%' }),
	},
	{
		dataField: 'alias',
		editable: (cell, row /*, rowIndex, index*/) => isEditable(row),
		text: labels.alias,
		headerStyle: () => ({ width: '25%' }),
	},
	{
		dataField: 'stage1Name',
		text: labels.stage1,
		align: () => ALIGN_CENTER,
		headerStyle: () => ({ width: '10%' }),
		editable: (cell, row) => isEditable(row),
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const cellEditProps = (editable) =>
	cellEditFactory({
		mode: editable ? 'click' : 'none',
		blurToSave: true,
		afterSaveCell: (oldValue, newValue, row, column) => {
			// Aggiornamento per queste due colonne viene eseguito dalla funzione onSelect
			if (column.dataField === 'player1.alias' || column.dataField === 'player2.alias') return;
			(async () => {
				await updatePair({ pair: row });
			})();
		},
	});
