/**
 * Get clients from API.
 * 
 * @returns {Object}
 */
export const getClients = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes`);
    const data = await response.json();

    return data;
};

/**
 * Create a new resource on API.
 * 
 * @param {Object} data 
 */
export const addClient = async (data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await response.json();

    } catch (error) {
        console.error(error);
    }
};

export const getClient = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`);
    const data = await response.json();

    return data;
};