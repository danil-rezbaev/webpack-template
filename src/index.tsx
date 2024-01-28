import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/about",
				element: <div>about</div>,
			}
		]
	},
]);

root.render(
	<RouterProvider router={router} />
);
