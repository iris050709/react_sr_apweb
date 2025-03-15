import React, { useState } from "react";
import './SensorEditForm.css'; // Importa el archivo de estilos

const SensorEditForm = ({ sensor, onUpdate, onCancel }) => {
    const [updatedSensor, setUpdatedSensor] = useState(sensor);

    const handleChange = (e) => {
        setUpdatedSensor({ ...updatedSensor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedSensor.id, updatedSensor);
            onCancel(); // Volver a la vista de creación
        } else {
            console.error("onUpdate no está definido");
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Sensor</h2>
            <form className="sensor-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    name="nombre"
                    value={updatedSensor.nombre}
                    onChange={handleChange}
                    required
                />
                <label>Tipo:</label>
                <input
                    className="input-field"
                    name="tipo"
                    value={updatedSensor.tipo}
                    onChange={handleChange}
                    required
                />
                <label>Ubicación:</label>
                <input
                    className="input-field"
                    name="ubicacion"
                    value={updatedSensor.ubicacion}
                    onChange={handleChange}
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Sensor</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default SensorEditForm;
