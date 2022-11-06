import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '../typography/Typography';

function THead(props) {
	const {columnHeader} = props;
	return (
		<TableHead>
			<TableRow>
				{columnHeader.map((item, index) => {
					return (
						<TableCell key={index}>
							<Typography type='h5' style={{textAlign: 'center'}}>
								{item}
							</Typography>
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
}

export default THead;
