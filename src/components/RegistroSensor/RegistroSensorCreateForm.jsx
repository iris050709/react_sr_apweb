import React, { useState } from "react";

const RegistroSensorCreateForm = ({ onCreate, onCancel }) => {
    const [sensor_id, setSensorId] = useState("");
    const [valor, setValor] = useState("");
    const [fecha_registro, setFechaRegistro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRegistro = { sensor_id, valor, fecha_registro };
        onCreate(newRegistro);
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Registro de Sensor</h2>
            <form onSubmit={handleSubmit}>
                <label>ID Sensor:</label>
                <input
                    type="text"
                    value={sensor_id}
                    onChange={(e) => setSensorId(e.target.value)}
                    required
                />
                <label>Valor:</label>
                <input
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
                <label>Fecha de Registro:</label>
                <input
                    type="datetime-local"
                    value={fecha_registro}
                    onChange={(e) => setFechaRegistro(e.target.value)}
                    required
                />
                <button type="submit">Crear Registro</button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default RegistroSensorCreateForm;
