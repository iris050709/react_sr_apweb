// services/ValvulaService.js

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

export async function createValvula(valvula) {
    try {
        const response = await fetch(BASE_URL + "valvulas/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(valvula),
        });

        if (!response.ok) {
            throw new Error("Error al crear la válvula");
        }

        return response.json();
    } catch (error) {
        console.error("Error en createValvula:", error);
        return null;
    }
}

export async function updateValvula(id, updatedValvula) {
    try {
        const response = await fetch(BASE_URL + `valvulas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },            
            body: JSON.stringify(updatedValvula),
        });

        if (!response.ok) {
            throw new Error("Error al actualizar la válvula");
        }

        return response.json();
    } catch (error) {
        console.error("Error en updateValvula:", error);
        return null;
    }
}

export async function deleteValvula(id) {
    try {
        const response = await fetch(BASE_URL + `valvulas/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error al eliminar la válvula");
        }

        return response.json();
    } catch (error) {
        console.error("Error en deleteValvula:", error);
        return null;
    }
}
