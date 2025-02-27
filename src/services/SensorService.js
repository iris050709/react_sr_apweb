const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllSensores() {
    try {
        const response = await fetch(BASE_URL + "sensores/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de sensores");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllSensores:", error);
        return [];
    }
}
