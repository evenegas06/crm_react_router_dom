import { Form, useNavigate } from "react-router-dom";

const ClientItem = ({ client }) => {

    /* ----- Hooks ----- */
    const navigate = useNavigate();

    const { id, name, phone, email, company } = client;

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">
                    {name}
                </p>

                <p>{company}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                        Correo:
                    </span>
                    {' '} {email}
                </p>

                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">
                        Tel:
                    </span>
                    {' '} {phone}
                </p>
            </td>

            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => { navigate(`/clientes/${id}/editar`); }}
                >
                    Editar
                </button>

                <Form
                    method="POST"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(event) => {
                        if (!confirm('¿Esta seguro de eliminar este registro?')) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>
    );
};
export default ClientItem; 