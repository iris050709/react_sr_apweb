import React, { useState } from "react";

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

    return (
        <form onSubmit={handleSubmit}>
            <input name="nombre" placeholder="Nombre" value={sensor.nombre} onChange={handleChange} required />
            <input name="tipo" placeholder="Tipo" value={sensor.tipo} onChange={handleChange} required />
            <input name="ubicacion" placeholder="Ubicación" value={sensor.ubicacion} onChange={handleChange} />
            <input name="fecha_instalacion" type="date" value={sensor.fecha_instalacion} onChange={handleChange} required />
            <button type="submit">Agregar Sensor</button>
        </form>
    );
};

export default SensorCreateForm;
