// components/Valvula/ValvulaEditForm.js

import React, { useState, useEffect } from "react";

const ValvulaEditForm = ({ valvula, onUpdate, onCancel }) => {
    const [nombre, setNombre] = useState(valvula.nombre);
    const [ubicacion, setUbicacion] = useState(valvula.ubicacion);
    const [estado, setEstado] = useState(valvula.estado);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedValvula = { nombre, ubicacion, estado};
        onUpdate(valvula.id, updatedValvula);
    };

    useEffect(() => {
        setNombre(valvula.nombre);
        setUbicacion(valvula.ubicacion);
        setEstado(valvula.estado);
    }, [valvula]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ubicación"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
            />
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="Abierta">Abierta</option>
                <option value="Cerrada">Cerrada</option>
            </select>
            <button type="submit">Actualizar Válvula</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default ValvulaEditForm;
