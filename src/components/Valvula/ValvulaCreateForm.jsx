// components/Valvula/ValvulaCreateForm.js

import React, { useState } from "react";

const ValvulaCreateForm = ({ onCreate }) => {
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [estado, setEstado] = useState("Cerrada");
    const [fechaInstalacion, setFechaInstalacion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValvula = { nombre, ubicacion, estado, fecha_instalacion: fechaInstalacion };
        onCreate(newValvula);
    };

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
            <input
                type="date"
                value={fechaInstalacion}
                onChange={(e) => setFechaInstalacion(e.target.value)}
            />
            <button type="submit">Crear Válvula</button>
        </form>
    );
};

export default ValvulaCreateForm;
