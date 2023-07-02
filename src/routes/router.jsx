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
                element: <NewClient />,
                action: async ({ request }) => {
                    const formData = await request.formData();
                    
                    console.log('Submit al formulario');
                }
            }
        ]
    },
]);

export default router;