import { createBrowserRouter, redirect } from 'react-router-dom';

import SideBar from '../layouts/SideBar';
import NewClient from '../pages/NewClient';
import Clients from '../pages/Clients';

import { addClient, deleteClient, getClient, getClients, updateClient } from '../api/clients';
import ErrorPage from '../pages/ErrorPage';
import EditClient from '../pages/EditClient';


const router = createBrowserRouter([
    {
        path: '/',
        element: <SideBar />,
        children: [
            {
                index: true,
                element: <Clients />,
                loader: () => {
                    const clients = getClients();
                    return clients;
                },
                errorElement: <ErrorPage />,
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
                },
            },
            {
                path: '/clientes/:client_id/editar',
                element: <EditClient />,
                loader: async ({ params }) => {
                    const client = await getClient(params.client_id);

                    if (Object.values(client).length === 0) {
                        throw new Response('', {
                            status: 404,
                            statusText: `El cliente con id ${params.client_id} no existe.`
                        });
                    }

                    return client;
                },
                errorElement: <ErrorPage />,
                action: async ({ request, params }) => {
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

                    await updateClient(params.client_id, data);

                    return redirect('/');
                },
            },
            {
                path: '/clientes/:client_id/eliminar',
                action: async ({ params }) => {
                    await deleteClient(params.client_id);

                    return redirect('/');
                },
            },
        ]
    },
]);

export default router;