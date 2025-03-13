import { useState, useEffect } from "react";
import { get_all_configuraciones, create_configuracion, update_configuracion, delete_configuracion } from "../services/RiegoConfigService";

export default function useRiegoConfig() {
    const [configuraciones, setConfiguraciones] = useState([]);
    const [loading, setLoading] = useState(false);  // Estado de carga
    const [error, setError] = useState(null);  // Estado de error

    useEffect(() => {
        fetchConfiguraciones();
    }, []);

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

    const addConfig = async (nuevaconfig) => {
        setLoading(true);
        setError(null);
        console.log("Enviando configuración al servidor:", nuevaconfig); // Log para verificar los datos
        try {
            await create_configuracion(nuevaconfig);
            fetchConfiguraciones();
        } catch (error) {
            setError("Error al crear la configuración: " + error.message);
            console.error("Error al crear la configuración:", error);
        } finally {
            setLoading(false);
        }
    };
     

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

    return { configuraciones, loading, error, addConfig, updateConfig, deleteConfig };
}
