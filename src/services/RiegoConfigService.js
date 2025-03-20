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

export const create_configuracion = async (config) => {
    try {
        const configData = {
            usuario_id: config.usuario_id,  // Se asegura que se envíe el usuario_id tal cual
            umbral_humedad: parseFloat(config.umbral_humedad).toFixed(2), // Asegúrate de que el umbral de humedad sea un número con 2 decimales
            horario: config.horario.trim(),  // Asegúrate de que no haya espacios innecesarios
            activo: config.activo === 1 ? 1 : 0,  // Envía 1 si es 1, de lo contrario 0
        };

        console.log("Datos enviados:", configData);  // Para depurar y verificar que los datos sean correctos

        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(configData),  // Envía los datos correctamente formateados
        });

        if (!response.ok) {
            throw new Error('Error al crear configuración');
        }

        return await response.json();  // Devuelve la respuesta del servidor
    } catch (error) {
        console.error('Error en create_configuracion:', error);
        throw error;  // Lanza el error para ser manejado en el componente
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
