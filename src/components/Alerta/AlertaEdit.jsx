import React, { useState } from "react";

const AlertEditForm = ({ alerta, onUpdate }) => {
    const [updatedAlert, setUpdatedAlert] = useState(alerta);

    const handleChange = (e) => {
        setUpdatedAlert({ ...updatedAlert, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedAlert.id, updatedAlert);
        } else {
            console.error("onUpdate no está definido");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="mensaje" 
                value={updatedAlert.mensaje} 
                onChange={handleChange} 
                required 
                placeholder="Mensaje de la alerta"
            />
            <input 
                name="usuario_id" 
                value={updatedAlert.usuario_id || ""} 
                onChange={handleChange} 
                placeholder="ID del usuario (opcional)"
            />
            <button type="submit">Actualizar Alerta</button>
        </form>
    );
};

export default AlertEditForm;
