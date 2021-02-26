import { PlayerDTO } from '../../@common/dto';
import React, { useState } from 'react';
import Select, { Styles, ValueType, ActionMeta } from 'react-select';

export interface PlayerSelectProps {
	styles?: Partial<Styles<PlayerDTO, false>>;
	options: PlayerDTO[];
	columnIndex: number;
	id: number;
	onUpdate: any;
	onSelect: any;
	row: any;
}

const PlayerSelection: React.FC<PlayerSelectProps> = React.forwardRef(
	({ styles, row, columnIndex, /*id,*/ onUpdate, onSelect, options }, ref) => {
		const [selectedOption, setSelectedOption] = useState<PlayerDTO>();

		const handleChange = (option: ValueType<PlayerDTO, false>, actionMeta: ActionMeta<PlayerDTO>) => {
			setSelectedOption(option as PlayerDTO);
			onSelect(option, row.id, columnIndex);
		};

		return (
			<Select
				styles={styles}
				options={options}
				onChange={handleChange}
				getOptionLabel={(option) => option.alias}
				getOptionValue={(option) => option.id?.toString(10)!}
				value={selectedOption}
				placeholder="Cerca..."
				isSearchable
				isClearable
			/>
		);
	}
);

export default PlayerSelection;
