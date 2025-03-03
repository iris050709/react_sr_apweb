import { useEffect, useState } from "react";
import { getAllAlerts, createAlert, updateAlert, deleteAlert } from "../services/AlertService";

export default function useAlerts() {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlerts();
    }, []);

    const fetchAlerts = async () => {
        try {
            setLoading(true);
            const data = await getAllAlerts();
            setAlertas(data);
        } catch (error) {
            console.error("Error al obtener alertas:", error);
        } finally {
            setLoading(false);
        }
    };

    const addAlert = async (nuevaAlerta) => {
        await createAlert(nuevaAlerta);
        fetchAlerts();
    };

    const editAlert = async (alertId, alertData) => {
        await updateAlert(alertId, alertData);
        fetchAlerts();
    };

    const removeAlert = async (alertId) => {
        await deleteAlert(alertId);
        fetchAlerts();
    };

    return { alertas, loading, addAlert, editAlert, removeAlert };
}
