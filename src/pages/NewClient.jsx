import { Form, useActionData, useNavigate } from "react-router-dom";
import FormLayout from "../components/Form";
import ErrorAlert from "../components/ErrorAlert";

const NewClient = () => {
    /* ----- Hooks ----- */
    const navigate = useNavigate();
    const errors = useActionData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">
                Clientes
            </h1>

            <p className="mt-3">
                Llena todos los campos para registrar un nuevo cliente.
            </p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => { navigate('/'); }}
                >
                    Volver
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

                {errors?.length && errors.map((item, index) => {
                    return (
                        <ErrorAlert key={index}>
                            {item}
                        </ErrorAlert>
                    );
                })}

                <Form
                    method="POST"
                    noValidate
                >
                    <FormLayout />

                    <input
                        type="submit"
                        value="Registrar cliente"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    />
                </Form>
            </div>
        </>
    );
};
export default NewClient;