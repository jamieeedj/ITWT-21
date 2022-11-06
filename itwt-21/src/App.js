import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import renderRoutes from './utils/renderRoutes';

function App() {
	return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
