import React, { useState } from "react";

const SensorEditForm = ({ sensor, onUpdate }) => {
    const [updatedSensor, setUpdatedSensor] = useState(sensor);

    const handleChange = (e) => {
        setUpdatedSensor({ ...updatedSensor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedSensor.id, updatedSensor);
        } else {
            console.error("onUpdate no está definido");
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input name="nombre" value={updatedSensor.nombre} onChange={handleChange} required />
            <input name="tipo" value={updatedSensor.tipo} onChange={handleChange} required />
            <input name="ubicacion" value={updatedSensor.ubicacion} onChange={handleChange} />
            <button type="submit">Actualizar Sensor</button>
        </form>
    );
};

export default SensorEditForm;
