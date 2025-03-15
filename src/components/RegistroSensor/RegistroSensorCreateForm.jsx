import React, { useState } from "react";
import './RegistroSensorCreateForm.css'; // Importa el archivo de estilos

const RegistroSensorCreateForm = ({ onCreate, onCancel }) => {
    const [sensor_id, setSensorId] = useState("");
    const [valor, setValor] = useState("");
    const [fecha_registro, setFechaRegistro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRegistro = { sensor_id, valor, fecha_registro };
        onCreate(newRegistro);
        // Limpiar el formulario después de enviar los datos
        setSensorId("");
        setValor("");
        setFechaRegistro("");
    };

    const handleCancel = () => {
        // Limpiar el formulario si se cancela
        setSensorId("");
        setValor("");
        setFechaRegistro("");
        onCancel(); // Llamar a la función onCancel, si es necesario
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Registro de Sensor</h2>
            <form className="registro-form" onSubmit={handleSubmit}>
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
                <label>Fecha de Registro:</label>
                <input
                    className="input-field"
                    type="datetime-local"
                    value={fecha_registro}
                    onChange={(e) => setFechaRegistro(e.target.value)}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Crear Registro</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RegistroSensorCreateForm;
