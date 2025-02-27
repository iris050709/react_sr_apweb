import { useEffect, useState } from "react";
import { getAllValvulas } from "../services/ValvulaService";

export default function useValvulas() {
    const [valvulas, setValvulas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchValvulas();
    }, []);

    const fetchValvulas = async () => {
        try {
            const data = await getAllValvulas();
            setValvulas(data);
        } catch (error) {
            console.error("Error al obtener las válvulas: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { valvulas, loading };
}
