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

/**
 * Get client info by id.
 * 
 * @param {string} id 
 * @returns 
 */
export const getClient = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`);
    const data = await response.json();

    return data;
};

/**
 * Update a specific client.
 * 
 * @param {string} id Client id
 * @param {Object} data All client info.
 */
export const updateClient = async (id, data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'PUT',
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

/**
 * Delete a client by id.
 * 
 * @param {string} id Client id
 */
export const deleteClient = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'DELETE'
        });

        await response.json();
    } catch (error) {
        console.error(error);
    }
};