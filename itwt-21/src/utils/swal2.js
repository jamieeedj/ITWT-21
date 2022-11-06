import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(Swal);

function swal2(icon, text) {
	return swal.fire({
		icon,
		title: icon === 'success' ? 'Success!' : 'Something went wrong!',
		text: text ? text : null,
	});
}

export default swal2;
