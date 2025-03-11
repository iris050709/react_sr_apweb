// hooks/useValvulas.js

import { useState, useEffect } from "react";
import { getAllValvulas, createValvula, updateValvula, deleteValvula } from "../services/ValvulaService";

export default function useValvulas() {
    const [valvulas, setValvulas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchValvulas();
    }, []);

    const fetchValvulas = async () => {
        try {
            setLoading(true);
            const data = await getAllValvulas();
            setValvulas(data);
        } catch (error) {
            console.error("Error al obtener las válvulas: ", error);
        } finally {
            setLoading(false);
        }
    };

    const addValvula = async (nuevaValvula) => {
        await createValvula(nuevaValvula);
        fetchValvulas();
    };

    const editValvula = async (valvulaId, valvulaData) => {
        await updateValvula(valvulaId, valvulaData);
        fetchValvulas();
    };

    const removeValvula = async (valvulaId) => {
        await deleteValvula(valvulaId);
        fetchValvulas();
    };

    return { valvulas, loading, addValvula, editValvula, removeValvula };
}
