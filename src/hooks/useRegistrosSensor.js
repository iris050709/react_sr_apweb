import { useEffect, useState } from "react";
import { 
    getAllRegistrosSensor, 
    createRegistroSensor, 
    updateRegistroSensor, 
    deleteRegistroSensor 
} from "../services/RegistroSensorService";

export default function useRegistrosSensor() {
    const [registros, setRegistros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRegistros();
    }, []);

    const fetchRegistros = async () => {
        try {
            setLoading(true);
            const data = await getAllRegistrosSensor();
            setRegistros(data);
        } catch (error) {
            console.error("Error al obtener registros de sensores:", error);
        } finally {
            setLoading(false);
        }
    };

    const addRegistro = async (nuevoRegistro) => {
        try {
            await createRegistroSensor(nuevoRegistro);
            fetchRegistros();
        } catch (error) {
            console.error("Error al agregar registro de sensor:", error);
        }
    };

    const editRegistro = async (registroData) => {
        try {
            // Asegúrate de pasar solo el ID del registro a la función de actualización
            await updateRegistroSensor(registroData.id, registroData);
            fetchRegistros();
        } catch (error) {
            console.error("Error al actualizar registro de sensor:", error);
        }
    };    

    const removeRegistro = async (registroId) => {
        try {
            await deleteRegistroSensor(registroId);
            fetchRegistros();
        } catch (error) {
            console.error("Error al eliminar registro de sensor:", error);
        }
    };

    return { registros, loading, addRegistro, editRegistro, removeRegistro };
}
