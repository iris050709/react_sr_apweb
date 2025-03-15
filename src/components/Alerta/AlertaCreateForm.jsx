import React, { useState } from "react";
import './AlertCreateForm.css'; // Importa el archivo de estilos

const AlertCreateForm = ({ onCreate }) => {
    const [alerta, setAlerta] = useState({ mensaje: "", usuario_id: "", fecha_alerta: "" });

    const handleChange = (e) => {
        setAlerta({ ...alerta, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(alerta);
        setAlerta({ mensaje: "", usuario_id: "", fecha_alerta: "" });
    };

    const handleCancel = () => {
        setAlerta({ mensaje: "", usuario_id: "", fecha_alerta: "" });
    };

    return (
        <div className="form-container">
            <h2>Crear Nueva Alerta</h2>
            <form className="alert-form" onSubmit={handleSubmit}>
                <label>Mensaje:</label>
                <input
                    className="input-field"
                    name="mensaje"
                    placeholder="Mensaje"
                    value={alerta.mensaje}
                    onChange={handleChange}
                    required
                />
                <label>ID Usuario:</label>
                <input
                    className="input-field"
                    name="usuario_id"
                    placeholder="ID del usuario"
                    value={alerta.usuario_id}
                    onChange={handleChange}
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Agregar Alerta</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AlertCreateForm;
