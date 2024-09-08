import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <button>hi</button>,
	},
];

const router = createBrowserRouter(routes);

export default router;
