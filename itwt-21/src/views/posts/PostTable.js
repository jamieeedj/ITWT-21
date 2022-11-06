import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import LoadingSpinner from '../../components/loadingspinner/LoadingSpinner';
import THead from '../../components/table/THead';
import TBody from '../../components/table/TBody';

export default function PostTable(props) {
	const {data, isLoading} = props;
	const heads = ['Title', 'Created at', 'Actions'];

	function formatDate(date) {
		let options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const cutDate = date.substring(0, 10);
		const newDate = new Date(cutDate);

		return newDate.toLocaleDateString('en-US', options);
	}

	return (
		<TableContainer component={Paper}>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Table sx={{minWidth: 650}} aria-label='simple table'>
					<THead columnHeader={heads} />
					<TBody tableData={data} formatDate={formatDate} {...props} />
				</Table>
			)}
		</TableContainer>
	);
}
