import { useLoaderData } from "react-router-dom";
import ClientItem from "../components/ClientItem";

const Clients = () => {
    const data = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">
                Clientes
            </h1>

            <p className="mt-3">
                Administra tus clientes
            </p>

            {data.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">
                                Cliente
                            </th>

                            <th className="p-2">
                                Contacto
                            </th>
                            
                            <th className="p-2">
                                Acciones
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => {
                            return (
                                <ClientItem
                                    key={item.id}
                                    client={item}
                                />
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">
                    No hay clientes aún
                </p>
            )}
        </>
    );
};
export default Clients;