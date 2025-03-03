const BASE_URL = "http://127.0.0.1:5000/sensores/";

export async function getAllSensores() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error al obtener la lista de sensores");
        return response.json();
    } catch (error) {
        console.error("Error en getAllSensores:", error);
        return [];
    }
}

export async function createSensor(sensor) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sensor),
        });
        return response.json();
    } catch (error) {
        console.error("Error en createSensor:", error);
    }
}

export async function updateSensor(id, sensor) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sensor),
        });
        return response.json();
    } catch (error) {
        console.error("Error en updateSensor:", error);
    }
}

export async function deleteSensor(id) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error al eliminar el sensor");
    } catch (error) {
        console.error("Error en deleteSensor:", error);
    }
}

