const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllAlerts() {
    try {
        const response = await fetch(BASE_URL + "alertas/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de alertas");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllAlerts:", error);
        return [];
    }
}
