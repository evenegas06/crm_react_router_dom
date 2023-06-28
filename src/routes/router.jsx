import { createBrowserRouter } from 'react-router-dom';
import Header from '../layouts/Header';
import NewClient from '../pages/NewClient';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/clientes/nuevo',
                element: <NewClient />
            }
        ]
    },
]);

export default router;