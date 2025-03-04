import { useEffect, useState } from "react";
import { getAllRiegos, createRiego, updateRiego, deleteRiego } from "../services/RiegoService";

export default function useRiegos() {
    const [riegos, setRiegos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRiegos();
    }, []);

    const fetchRiegos = async () => {
        try {
            setLoading(true);
            const data = await getAllRiegos();
            setRiegos(data);
        } catch (error) {
            console.error("Error al obtener los riegos:", error);
        } finally {
            setLoading(false);
        }
    };

    const addRiego = async (nuevoRiego) => {
        await createRiego(nuevoRiego);
        fetchRiegos();
    };

    const editRiego = async (riegoId, riegoData) => {
        await updateRiego(riegoId, riegoData);
        fetchRiegos();
    };

    const removeRiego = async (riegoId) => {
        await deleteRiego(riegoId);
        fetchRiegos();
    };

    return { riegos, loading, addRiego, editRiego, removeRiego };
}
