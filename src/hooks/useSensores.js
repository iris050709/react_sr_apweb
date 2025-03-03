import { useEffect, useState } from "react";
import { getAllSensores, createSensor, updateSensor, deleteSensor } from "../services/SensorService";

export default function useSensores() {
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSensores();
    }, []);

    const fetchSensores = async () => {
        try {
            setLoading(true);
            const data = await getAllSensores();
            setSensores(data);
        } catch (error) {
            console.error("Error al obtener los sensores:", error);
        } finally {
            setLoading(false);
        }
    };

    const addSensor = async (nuevoSensor) => {
        await createSensor(nuevoSensor);
        fetchSensores();
    };

    const editSensor = async (sensorId, sensorData) => {
        await updateSensor(sensorId, sensorData);
        fetchSensores();
    };

    const removeSensor = async (sensorId) => {
        await deleteSensor(sensorId);
        fetchSensores();
    };

    return { sensores, loading, addSensor, editSensor, removeSensor };
}
