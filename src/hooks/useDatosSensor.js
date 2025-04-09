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
        fetchDatos(); // Llamada inicial al montar
    
        const interval = setInterval(() => {
            fetchDatos(); // Se llama cada 5 segundos
        }, 5000);
    
        return () => clearInterval(interval); // Limpieza al desmontar
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
            fetchDatos(); // Actualizar la lista inmediatamente después de agregar un nuevo dato
        } catch (error) {
            console.error("Error al agregar dato de sensor:", error);
        }
    };

    const editDato = async (datoData) => {
        try {
            await updateDatosSensor(datoData.id, datoData);
            fetchDatos(); // Actualizar la lista después de editar un dato
        } catch (error) {
            console.error("Error al actualizar dato de sensor:", error);
        }
    };

    const removeDato = async (datoId) => {
        try {
            await deleteDatosSensor(datoId);
            fetchDatos(); // Actualizar la lista después de eliminar un dato
        } catch (error) {
            console.error("Error al eliminar dato de sensor:", error);
        }
    };

    return { datos, loading, addDato, editDato, removeDato };
}
