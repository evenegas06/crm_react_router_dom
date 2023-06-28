import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Inicio</h1>
    },
    {
        path: '/nosotros',
        element: <h1>Nosotros</h1>
    },
]);

export default router;