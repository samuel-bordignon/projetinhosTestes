const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api'

const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return { success: false, message: `HTTP error! status: ${response.status}`, data: [] };
        }

        const data = await response.json();
        return { success: true, message: "Request successful", data: data.length ? data : [] };
        
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        return { success: false, message: "Erro na requisição", data: [] };
    }
};


export const getData = async (table) => {
    return fetchData(`${BASE_URL}/${table}`)
}

export const createData = async (table, data) => {
    return fetchData(`${BASE_URL}/${table}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
}

export const getDataById = async (table, idName, idValue) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`)
}

export const updateData = async (table, idName, idValue, data) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
}

export const deleteData = async (table, idName, idValue) => {
    return fetchData(`${BASE_URL}/${table}/${idName}/${idValue}`, {
        method: 'DELETE',
    })
}

export const checkEmailExist = async (table, email) => {
    const response = await getDataById()
}   

export const login = async (email, senha) => {

}