import { useEffect, useState } from "react";
import { getAllRegistrosSensor } from "../services/RegistroSensorService";

export default function useRegistrosSensor() {
    const [registros, setRegistros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRegistrosSensor();
    }, []);

    const fetchRegistrosSensor = async () => {
        try {
            const data = await getAllRegistrosSensor();
            setRegistros(data);
        } catch (error) {
            console.error("Error al obtener registros de sensores: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { registros, loading };
}
