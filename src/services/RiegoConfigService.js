const BASE_URL = "http://127.0.0.1:5000/configuraciones_riego";

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

export const create_configuracion = async (config) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config),
        });
        if (!response.ok) {
            throw new Error('Error al crear configuración');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en create_configuracion:', error);
        throw error;
    }
};


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
