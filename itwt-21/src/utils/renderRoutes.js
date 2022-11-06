import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PAGE_ACCESS} from '../configs/constants';

import PublicRoute from '../components/route/PublicRoute';
import PrivateRoute from '../components/route/PrivateRoute';

function renderRoutes(routes) {
	return (
		<Routes>
			{routes.map((item, index) => {
				const {access, path, element} = item;

				if (access === PAGE_ACCESS.public) {
					return (
						<Route
							key={index}
							path={path}
							element={<PublicRoute>{element}</PublicRoute>}
						/>
					);
				}

				if (access === PAGE_ACCESS.private) {
					return (
						<Route
							key={index}
							path={path}
							element={<PrivateRoute>{element}</PrivateRoute>}
						/>
					);
				}

				return <Route key={index} {...item} />;
			})}
		</Routes>
	);
}

export default renderRoutes;
