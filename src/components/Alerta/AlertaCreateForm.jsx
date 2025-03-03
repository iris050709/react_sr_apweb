import React, { useState } from "react";

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

    return (
        <form onSubmit={handleSubmit}>
            <input name="mensaje" placeholder="Mensaje" value={alerta.mensaje} onChange={handleChange} required />
            <input name="usuario_id" placeholder="ID del usuario" value={alerta.usuario_id} onChange={handleChange} />
            <button type="submit">Agregar Alerta</button>
        </form>
    );
};

export default AlertCreateForm;
