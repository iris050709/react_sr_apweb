import React, { useState } from "react";
import './AlertEditForm.css'; // Importa el archivo de estilos

const AlertEditForm = ({ alerta, onUpdate, onCancel }) => {
    const [updatedAlert, setUpdatedAlert] = useState(alerta);

    const handleChange = (e) => {
        setUpdatedAlert({ ...updatedAlert, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedAlert.id, updatedAlert);
            onCancel(); // Volver a la vista de creación
        } else {
            console.error("onUpdate no está definido");
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Alerta</h2>
            <form className="alert-form" onSubmit={handleSubmit}>
                <label>Mensaje de Alerta:</label>
                <input
                    className="input-field"
                    name="mensaje"
                    value={updatedAlert.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Mensaje de la alerta"
                />
                <label>ID del Usuario (opcional):</label>
                <input
                    className="input-field"
                    name="usuario_id"
                    value={updatedAlert.usuario_id || ""}
                    onChange={handleChange}
                    placeholder="ID del usuario (opcional)"
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Alerta</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AlertEditForm;
