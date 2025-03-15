import React, { useState } from "react";
import './SensorCreateForm.css'; // Importa el archivo de estilos

const SensorCreateForm = ({ onCreate }) => {
    const [sensor, setSensor] = useState({ nombre: "", tipo: "", ubicacion: "", fecha_instalacion: "" });

    const handleChange = (e) => {
        setSensor({ ...sensor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(sensor);
        setSensor({ nombre: "", tipo: "", ubicacion: "", fecha_instalacion: "" });
    };

    const handleCancel = () => {
        setSensor({ nombre: "", tipo: "", ubicacion: "", fecha_instalacion: "" });
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Sensor</h2>
            <form className="sensor-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    name="nombre"
                    placeholder="Nombre"
                    value={sensor.nombre}
                    onChange={handleChange}
                    required
                />
                <label>Tipo:</label>
                <input
                    className="input-field"
                    name="tipo"
                    placeholder="Tipo"
                    value={sensor.tipo}
                    onChange={handleChange}
                    required
                />
                <label>Ubicación:</label>
                <input
                    className="input-field"
                    name="ubicacion"
                    placeholder="Ubicación"
                    value={sensor.ubicacion}
                    onChange={handleChange}
                />
                <label>Fecha de Instalación:</label>
                <input
                    className="input-field"
                    name="fecha_instalacion"
                    type="date"
                    value={sensor.fecha_instalacion}
                    onChange={handleChange}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Agregar Sensor</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default SensorCreateForm;
