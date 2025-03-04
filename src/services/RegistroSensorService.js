// services/RegistroSensorService.js

const BASE_URL = "http://127.0.0.1:5000/";

export async function getAllRegistrosSensor() {
    try {
        const response = await fetch(BASE_URL + "registros/");
        if (!response.ok) {
            throw new Error("Error al obtener la lista de registros de sensores");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllRegistrosSensor:", error);
        return [];
    }
}

export async function createRegistroSensor(registro) {
    try {
        const response = await fetch(BASE_URL + "registros/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registro),
        });

        if (!response.ok) {
            throw new Error("Error al crear el registro de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en createRegistroSensor:", error);
        return null;
    }
}

export async function updateRegistroSensor(id, updatedRegistro) {
    try {
        const response = await fetch(BASE_URL + `registros/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRegistro),
        });

        if (!response.ok) {
            throw new Error("Error al actualizar el registro de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en updateRegistroSensor:", error);
        return null;
    }
}

export async function deleteRegistroSensor(id) {
    try {
        const response = await fetch(BASE_URL + `registros/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error al eliminar el registro de sensor");
        }

        return response.json();
    } catch (error) {
        console.error("Error en deleteRegistroSensor:", error);
        return null;
    }
}
