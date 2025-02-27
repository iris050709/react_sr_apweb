import { useEffect, useState } from "react";
import { get_all_configuraciones } from "../services/RiegoConfigService";

export default function useRiegoConfig() {
    const [configuraciones, setConfiguraciones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRiegoConfigs();
    }, []);

    const fetchRiegoConfigs = async () => {
        try {
            const data = await get_all_configuraciones();
            setConfiguraciones(data);
        } catch (error) {
            console.error("Error al obtener configuraciones de riego: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { configuraciones, loading };
}
