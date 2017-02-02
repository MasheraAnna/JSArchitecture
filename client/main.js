import React from 'react';
import ReactDOOM from 'react-dom';

import App from "./components/App.jsx";

ReactDOOM.render(
	<App />,
	document.getElementById('mount-point')
);