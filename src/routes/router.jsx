import { createBrowserRouter } from 'react-router-dom';

import SideBar from '../layouts/SideBar';
import NewClient from '../pages/NewClient';
import Clients from '../pages/Clients';

import { clients } from '../utils/data';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar />,
        children: [
            {
                index: true,
                element: <Clients />,
                loader: () => {
                    return clients;
                }
            },
            {
                path: '/clientes/nuevo',
                element: <NewClient />
            }
        ]
    },
]);

export default router;