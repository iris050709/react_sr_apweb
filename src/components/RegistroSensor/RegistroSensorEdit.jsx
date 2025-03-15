import React, { useState, useEffect } from "react";
import './RegistroSensorEditForm.css'; // Importa el archivo de estilos

const RegistroSensorEditForm = ({ registro, onUpdate, onCancel }) => {
    const [sensor_id, setSensorId] = useState(registro.sensor_id);
    const [valor, setValor] = useState(registro.valor);

    useEffect(() => {
        setSensorId(registro.sensor_id);
        setValor(registro.valor);
    }, [registro]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRegistro = { ...registro, sensor_id, valor };
        onUpdate(updatedRegistro);
        onCancel(); // Llama a onCancel para volver a la vista de creación
    };

    return (
        <div className="form-container">
            <h2>Editar Registro de Sensor</h2>
            <form className="registro-sensor-form" onSubmit={handleSubmit}>
                <label>ID Sensor:</label>
                <input
                    className="input-field"
                    type="text"
                    value={sensor_id}
                    onChange={(e) => setSensorId(e.target.value)}
                    required
                />
                <label>Valor:</label>
                <input
                    className="input-field"
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Registro</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RegistroSensorEditForm;
