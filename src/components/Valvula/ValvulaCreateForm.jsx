import React, { useState } from "react";
import './ValvulaCreateForm.css'; // Importa el archivo de estilos

const ValvulaCreateForm = ({ onCreate }) => {
    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [estado, setEstado] = useState("Cerrada");
    const [fechaInstalacion, setFechaInstalacion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValvula = { nombre, ubicacion, estado, fecha_instalacion: fechaInstalacion };
        onCreate(newValvula);
        setNombre("");
        setUbicacion("");
        setEstado("Cerrada");
        setFechaInstalacion("");
    };

    const handleCancel = () => {
        setNombre("");
        setUbicacion("");
        setEstado("Cerrada");
        setFechaInstalacion("");
    };

    return (
        <div className="form-container">
            <h2>Crear Nueva Válvula</h2>
            <form className="valvula-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <label>Ubicación:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Ubicación"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    required
                />
                <label>Estado:</label>
                <select
                    className="input-field"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                >
                    <option value="Abierta">Abierta</option>
                    <option value="Cerrada">Cerrada</option>
                </select>
                <label>Fecha de Instalación:</label>
                <input
                    className="input-field"
                    type="date"
                    value={fechaInstalacion}
                    onChange={(e) => setFechaInstalacion(e.target.value)}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Crear Válvula</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ValvulaCreateForm;
