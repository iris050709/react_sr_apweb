const BASE_URL = "http://127.0.0.1:5000/";

export async function get_all_configuraciones() {
    try {
        const response = await fetch(BASE_URL + "configuraciones_riego/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de configuraciones de riego");
        }
        return response.json();
    } catch (error) {
        console.error("Error en get_all_configuraciones:", error);
        return [];
    }
}

