const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllValvulas() {
    try {
        const response = await fetch(BASE_URL + "valvulas/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de válvulas");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllValvulas:", error);
        return [];
    }
}
