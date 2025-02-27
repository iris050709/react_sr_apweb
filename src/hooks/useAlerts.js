import { useEffect, useState } from "react";
import { getAllAlerts } from "../services/AlertService";

export default function useAlerts() {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlerts();
    }, []);

    const fetchAlerts = async () => {
        try {
            const data = await getAllAlerts();
            setAlertas(data);
        } catch (error) {
            console.error("Error al obtener alertas: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { alertas, loading };
}
