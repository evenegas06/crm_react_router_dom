import { createBrowserRouter } from 'react-router-dom';

import SideBar from '../layouts/SideBar';
import NewClient from '../pages/NewClient';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar />,
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