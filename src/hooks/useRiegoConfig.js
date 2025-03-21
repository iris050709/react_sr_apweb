import { useState, useEffect } from "react";
import { get_all_configuraciones, create_configuracion, update_configuracion, delete_configuracion } from "../services/RiegoConfigService";
import { getAllUsers } from "../services/UserService"; // Importa la función para obtener los usuarios

export default function useRiegoConfig() {
    const [configuraciones, setConfiguraciones] = useState([]);
    const [usuarios, setUsuarios] = useState([]); // Estado para guardar los usuarios
    const [loading, setLoading] = useState(false);  // Estado de carga
    const [error, setError] = useState(null);  // Estado de error

    useEffect(() => {
        fetchConfiguraciones();  // Obtener configuraciones al montar el componente
        fetchUsuarios();  // Obtener usuarios al montar el componente
    }, []);

    // Función para obtener las configuraciones
    const fetchConfiguraciones = async () => {
        setLoading(true);  // Activar carga
        setError(null);  // Limpiar el error si hay uno
        try {
            const data = await get_all_configuraciones();
            setConfiguraciones(data);  // Establecer los datos
        } catch (error) {
            setError("Error al obtener las configuraciones: " + error.message);
            console.error("Error al obtener las configuraciones:", error);
        } finally {
            setLoading(false);  // Finaliza el estado de carga
        }
    };

    // Función para obtener los usuarios
    const fetchUsuarios = async () => {
        setLoading(true);  // Activar carga
        setError(null);  // Limpiar el error si hay uno
        try {
            const data = await getAllUsers();
            setUsuarios(data);  // Establecer los usuarios
        } catch (error) {
            setError("Error al obtener los usuarios: " + error.message);
            console.error("Error al obtener los usuarios:", error);
        } finally {
            setLoading(false);  // Finaliza el estado de carga
        }
    };

    // Función para agregar una configuración
    const addConfig = async (nuevaConfig) => {
        try {
            await create_configuracion(nuevaConfig);
            fetchConfiguraciones();
        } catch (error) {
            console.error("Error al agregar registro de sensor:", error);
        }
    };

    
    
    // Función para actualizar una configuración
    const updateConfig = async (id, config) => {
        setLoading(true);
        setError(null);
        try {
            await update_configuracion(id, config);
            fetchConfiguraciones();
        } catch (error) {
            setError("Error al actualizar la configuración: " + error.message);
            console.error("Error al actualizar la configuración:", error);
        } finally {
            setLoading(false);
        }
    };

    // Función para eliminar una configuración
    const deleteConfig = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await delete_configuracion(id);
            fetchConfiguraciones();
        } catch (error) {
            setError("Error al eliminar la configuración: " + error.message);
            console.error("Error al eliminar la configuración:", error);
        } finally {
            setLoading(false);
        }
    };

    return { 
        configuraciones, 
        usuarios, // Devuelves los usuarios aquí
        loading, 
        error, 
        addConfig, 
        updateConfig, 
        deleteConfig 
    };
}
