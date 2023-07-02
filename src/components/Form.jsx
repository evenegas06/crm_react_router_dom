const Form = () => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >
                    Nombre:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre del cliente"
                    className="mt-2 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="company"
                    className="text-gray-800"
                >
                    Empresa:
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Empresa del cliente"
                    className="mt-2 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >
                    E-mail:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electrónico del cliente"
                    className="mt-2 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >
                    Teléfono:
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono del cliente"
                    className="mt-2 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >
                    Notas:
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    placeholder="Notas del cliente"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                />
            </div>
        </>
    );
};
export default Form;