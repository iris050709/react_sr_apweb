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

    const addValvula = async (newValvula) => {
        const createdValvula = await createValvula(newValvula);
        if (createdValvula) {
            setValvulas([...valvulas, createdValvula]);
        }
    };

    const updateValvula = async (id, updatedValvula) => {
        const updated = await updateValvula(id, updatedValvula);
        if (updated) {
            setValvulas(valvulas.map((valvula) => (valvula.id === id ? updated : valvula)));
        }
    };

    const deleteValvula = async (id) => {
        const deleted = await deleteValvula(id);
        if (deleted) {
            setValvulas(valvulas.filter((valvula) => valvula.id !== id));
        }
    };

    return { valvulas, loading, addValvula, updateValvula, deleteValvula };
}
