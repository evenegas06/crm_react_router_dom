import { createBrowserRouter, redirect } from 'react-router-dom';

import SideBar from '../layouts/SideBar';
import NewClient from '../pages/NewClient';
import Clients from '../pages/Clients';

import { addClient, getClients } from '../api/clients';
import ErrorPage from '../pages/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar />,
        children: [
            {
                index: true,
                element: <Clients />,
                loader: () => {
                    const clients = getClients()
                    return clients;
                },
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/nuevo',
                element: <NewClient />,
                action: async ({ request }) => {
                    const formData = await request.formData();
                    const data = Object.fromEntries(formData);

                    /* Validation */
                    const errors = [];
                    if (Object.values(data).includes('')) {
                        errors.push('Todos los campos son obligatorios.');
                    }

                    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
                    if (!regex.test(formData.get('email'))) {
                        errors.push('El email no es valido.');
                    }

                    if (Object.keys(errors).length) {
                        return errors;
                    }

                    await addClient(data);

                    return redirect('/');
                }
            }
        ]
    },
]);

export default router;