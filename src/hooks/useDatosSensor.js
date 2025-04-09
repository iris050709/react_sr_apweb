import { useEffect, useState } from "react";
import { 
    getAllDatosSensor, 
    createDatosSensor, 
    updateDatosSensor, 
    deleteDatosSensor 
} from "../services/DatosSensorService";

export default function useDatosSensor() {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDatos(); // Cargar datos al inicio

        const intervalo = setInterval(() => {
            fetchDatos(); // Actualizar automáticamente cada 10 segundos
        }, 10000);

        return () => clearInterval(intervalo); // Limpiar el intervalo al desmontar
    }, []);

    const fetchDatos = async () => {
        try {
            setLoading(true);
            const data = await getAllDatosSensor();
            setDatos(data);
        } catch (error) {
            console.error("Error al obtener datos de sensores:", error);
        } finally {
            setLoading(false);
        }
    };

    const addDato = async (nuevoDato) => {
        try {
            await createDatosSensor(nuevoDato);
            fetchDatos();
        } catch (error) {
            console.error("Error al agregar dato de sensor:", error);
        }
    };

    const editDato = async (datoData) => {
        try {
            await updateDatosSensor(datoData.id, datoData);
            fetchDatos();
        } catch (error) {
            console.error("Error al actualizar dato de sensor:", error);
        }
    };

    const removeDato = async (datoId) => {
        try {
            await deleteDatosSensor(datoId);
            fetchDatos();
        } catch (error) {
            console.error("Error al eliminar dato de sensor:", error);
        }
    };

    return { datos, loading, addDato, editDato, removeDato };
}
