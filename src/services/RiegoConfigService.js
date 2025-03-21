const BASE_URL = "https://3.145.63.126/configuraciones_riego";

export async function get_all_configuraciones() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Error al obtener la lista de configuraciones de riego");
        }
        return response.json();
    } catch (error) {
        console.error("Error en get_all_configuraciones:", error);
        return [];
    }
}


export async function create_configuracion(config) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
             body: JSON.stringify(config),
        });
        return response.json();
    } catch (error) {
        console.error("Error en crete_configuracion:", error);
    }
}

export async function update_configuracion(id, config) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(config),
        });
        if (!response.ok) {
            throw new Error("Error al actualizar la configuración de riego");
        }
        return response.json();
    } catch (error) {
        console.error("Error en update_configuracion:", error);
    }
}

export async function delete_configuracion(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Error al eliminar la configuración de riego");
        }
        return response.json();
    } catch (error) {
        console.error("Error en delete_configuracion:", error);
    }
}
