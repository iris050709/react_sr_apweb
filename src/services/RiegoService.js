const BASE_URL = "http://127.0.0.1:5000/riegos/";

export async function getAllRiegos() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error al obtener la lista de riegos");
        return response.json();
    } catch (error) {
        console.error("Error en getAllRiegos:", error);
        return [];
    }
}

export async function createRiego(riego) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(riego),
        });
        return response.json();
    } catch (error) {
        console.error("Error en createRiego:", error);
    }
}

export async function updateRiego(id, riego) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(riego),
        });
        return response.json();
    } catch (error) {
        console.error("Error en updateRiego:", error);
    }
}

export async function deleteRiego(id) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error al eliminar el riego");
    } catch (error) {
        console.error("Error en deleteRiego:", error);
    }
}
