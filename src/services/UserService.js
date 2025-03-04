const BASE_URL = "http://127.0.0.1:5000/users/";

export async function getAllUsers() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Error al obtener la lista de usuarios");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllUsers:", error);
        return [];
    }
}

export async function createUser(user) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Error al crear el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en createUser:", error);
    }
}

export async function updateUser(userId, user) {
    try {
        const response = await fetch(`${BASE_URL}${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Error al actualizar el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en updateUser:", error);
    }
}

export async function deleteUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}${userId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en deleteUser:", error);
    }
}
