import { useEffect, useState } from "react";
import { getAllSensores } from "../services/SensorService";

export default function useSensores() {
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSensores();
    }, []);

    const fetchSensores = async () => {
        try {
            const data = await getAllSensores();
            setSensores(data);
        } catch (error) {
            console.error("Error al obtener los sensores: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { sensores, loading };
}
