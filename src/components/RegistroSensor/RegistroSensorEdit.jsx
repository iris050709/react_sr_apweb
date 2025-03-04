import React, { useState, useEffect } from "react";

const RegistroSensorEditForm = ({ registro, onUpdate, onCancel }) => {
    const [sensor_id, setSensorId] = useState(registro.sensor_id);
    const [valor, setValor] = useState(registro.valor);

    useEffect(() => {
        setSensorId(registro.sensor_id);
        setValor(registro.valor);
    }, [registro]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRegistro = { ...registro, sensor_id, valor};
        onUpdate(updatedRegistro);
    };

    return (
        <div className="form-container">
            <h2>Editar Registro de Sensor</h2>
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
                <button type="submit">Actualizar Registro</button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default RegistroSensorEditForm;
