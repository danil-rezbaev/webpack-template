import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "@/pages/About";

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
				element: <About/>,
			}
		]
	},
]);

root.render(
	<RouterProvider router={router} />
);
