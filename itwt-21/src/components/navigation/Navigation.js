import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Image from '../image/Image';
import Button from '../form/Button';

import './Navigation.scss';

import journey from '../../assets/journey.png';

// AUTH CONTEXT
import {useAuth} from '../../contexts/AuthContext';

function Navigation() {
	const {isAuth, logout} = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<nav className='navbar'>
			{/* NAVBRAND */}
			<Link to='/' className='navbar--brand'>
				<Image
					source={journey}
					alt='Journey'
					className='navbar--brand__image'
				/>
				Journey
			</Link>

			{/* NAV ITEMS */}
			<div className='navbar--items'>
				{isAuth ? (
					<Fragment>
						<Button to='/posts' inverse className='navbar--item__posts'>
							Posts
						</Button>
						<Button
							type='button'
							onClick={handleLogout}
							className='navbar--item__logout'
						>
							Logout
						</Button>
					</Fragment>
				) : (
					<Fragment>
						<Button to='/signup' className='navbar--item__signup'>
							Sign Up
						</Button>
						<Button to='/login' inverse className='navbar--item__login'>
							Login
						</Button>
					</Fragment>
				)}
			</div>
		</nav>
	);
}

export default Navigation;
