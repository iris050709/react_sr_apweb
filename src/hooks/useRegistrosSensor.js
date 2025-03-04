import { useEffect, useState } from "react";
import { getAllRegistrosSensor, createRegistroSensor, updateRegistroSensor, deleteRegistroSensor } from "../services/RegistroSensorService";

export default function useRegistrosSensor() {
    const [registros, setRegistros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRegistrosSensor();
    }, []);

    const fetchRegistrosSensor = async () => {
        try {
            setLoading(true);
            const data = await getAllRegistrosSensor();
            setRegistros(data);
        } catch (error) {
            console.error("Error al obtener registros de sensores: ", error);
        } finally {
            setLoading(false);
        }
    };

    const addRegistro = async (newRegistro) => {
        const createdRegistro = await createRegistroSensor(newRegistro);
        if (createdRegistro) {
            setRegistros([...registros, createdRegistro]);
        }
    };

    const updateRegistro = async (id, updatedRegistro) => {
        const updated = await updateRegistroSensor(id, updatedRegistro);
        if (updated) {
            setRegistros(registros.map((registro) => (registro.id === id ? updated : registro)));
        }
    };

    const deleteRegistro = async (id) => {
        const deleted = await deleteRegistroSensor(id);
        if (deleted) {
            setRegistros(registros.filter((registro) => registro.id !== id));
        }
    };

    return { registros, loading, addRegistro, updateRegistro, deleteRegistro };
}
