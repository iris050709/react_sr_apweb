const BASE_URL = "https://3.145.63.126/riegos/";

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
    const riegoData = {
        ...riego,
        cantidad_agua: parseFloat(riego.cantidad_agua), 
        duracion: parseInt(riego.duracion, 10),       
    };

    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(riegoData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en createRiego:", errorData);
            return errorData;
        }
        return response.json();
    } catch (error) {
        console.error("Error en createRiego:", error);
    }
}



export async function updateRiego(riego) {
    try {
        const { id } = riego;  // Desestructuramos el 'id' del objeto riego
        console.log("Actualizando riego con ID:", id); // Verifica que el id es correcto
        const response = await fetch(`${BASE_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(riego), // Ahora pasamos todo el objeto 'riego'
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
