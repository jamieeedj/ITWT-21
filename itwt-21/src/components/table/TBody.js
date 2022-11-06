import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import SendIcon from '@mui/icons-material/Send';

function TBody(props) {
	const {
		tableData,
		formatDate,
		fetchPostToView,
		toggleViewModal,
		fetchPostToEdit,
		toggleEditModal,
		postToDelete,
		toggleDeleteModal,
	} = props;
	return (
		<TableBody>
			{tableData.map((item, index) => {
				return (
					<TableRow
						key={index}
						sx={{'&:last-child td, &:last-child th': {border: 0}}}
					>
						<TableCell component='th' scope='row' align='center'>
							{item.title}
						</TableCell>
						<TableCell align='center'>{formatDate(item.createdAt)}</TableCell>
						<TableCell align='center' className='table--actions'>
							<Stack direction='row' spacing={2} justifyContent='center'>
								<Button
									variant='outlined'
									color='secondary'
									endIcon={<PageviewIcon />}
									onClick={() => {
										fetchPostToView(item.postId);
										toggleViewModal();
									}}
								>
									View
								</Button>
								<Button
									variant='outlined'
									color='info'
									endIcon={<EditIcon />}
									onClick={() => {
										fetchPostToEdit(item.postId);
										toggleEditModal();
									}}
								>
									Edit
								</Button>
								<Button
									variant='outlined'
									color='error'
									endIcon={<SendIcon />}
									onClick={() => {
										postToDelete(item.postId);
										toggleDeleteModal();
									}}
								>
									Delete
								</Button>
							</Stack>
						</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
}

export default TBody;
