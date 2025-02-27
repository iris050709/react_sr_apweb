import { useEffect, useState } from "react";
import { get_all_riegos } from "../services/RiegoService";

export default function useRiegos() {
    const [riegos, setRiegos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRiegos();
    }, []);

    const fetchRiegos = async () => {
        try {
            const data = await get_all_riegos();
            setRiegos(data);
        } catch (error) {
            console.error("Error al obtener registros de riego: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { riegos, loading };
}
