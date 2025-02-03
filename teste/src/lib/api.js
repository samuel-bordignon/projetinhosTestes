const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        return null;
    }
};

export const getData = async (table) => {
    return fetchData(`${BASE_URL}/${table}`);
};

export const createData = async (table, data) => {
    return fetchData(`${BASE_URL}/${table}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
};

export const getDataById = async (table, idName, idValue) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`);
};

export const updateData = async (table, idName, idValue, data) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
};

export const deleteData = async (table, idName, idValue) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`, {
        method: 'DELETE',
    });
};