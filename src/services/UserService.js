const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllUsers() {
    try {
        const response = await fetch(BASE_URL + "users/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de usuarios");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllUsers:", error);
        return [];
    }
}
