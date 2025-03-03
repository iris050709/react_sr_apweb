const BASE_URL = "http://127.0.0.1:5000/alertas/";

export async function getAllAlerts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Error al obtener la lista de alertas");
        return response.json();
    } catch (error) {
        console.error("Error en getAllAlerts:", error);
        return [];
    }
}

export async function createAlert(alert) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alert),
        });
        return response.json();
    } catch (error) {
        console.error("Error en createAlert:", error);
    }
}

export async function updateAlert(id, alert) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alert),
        });
        return response.json();
    } catch (error) {
        console.error("Error en updateAlert:", error);
    }
}

export async function deleteAlert(id) {
    try {
        const response = await fetch(`${BASE_URL}${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error al eliminar la alerta");
    } catch (error) {
        console.error("Error en deleteAlert:", error);
    }
}
