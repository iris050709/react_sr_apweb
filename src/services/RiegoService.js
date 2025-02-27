const BASE_URL = "http://127.0.0.1:5000/";

export async function get_all_riegos() {
    try {
        const response = await fetch(BASE_URL + "riegos/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de riegos");
        }
        return response.json();
    } catch (error) {
        console.error("Error en get_all_riegos:", error);
        return [];
    }
}
