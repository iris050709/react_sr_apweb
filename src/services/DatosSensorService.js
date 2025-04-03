const BASE_URL = "https://3.145.63.126/";

export async function getAllDatosSensor() {
    try {
        const response = await fetch(BASE_URL + "datos/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de datos de sensores");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllDatosSensor:", error);
        return [];
    }
}

export async function createDatosSensor(datos) {
    try {
        const response = await fetch(BASE_URL + "datos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });

        if (!response.ok) {
            throw new Error("Error al crear el dato de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en createDatosSensor:", error);
        return null;
    }
}

export async function updateDatosSensor(id, updatedDatos) {
    try {
        const response = await fetch(BASE_URL + `datos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedDatos),
        });

        if (!response.ok) {
            throw new Error("Error al actualizar el dato de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en updateDatosSensor:", error);
        return null;
    }
}

export async function deleteDatosSensor(id) {
    try {
        const response = await fetch(BASE_URL + `datos/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error al eliminar el dato de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en deleteDatosSensor:", error);
        return null;
    }
}
