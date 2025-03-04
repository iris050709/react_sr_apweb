import React, { useState } from "react";

const RiegoCreateForm = ({ onCreate }) => {
    const [riego, setRiego] = useState({ valvula_id: "", cantidad_agua: "", duracion: "", fecha_riego: "" });

    const handleChange = (e) => {
        setRiego({ ...riego, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(riego);
        setRiego({ valvula_id: "", cantidad_agua: "", duracion: "", fecha_riego: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="valvula_id" placeholder="ID Válvula" value={riego.valvula_id} onChange={handleChange} />
            <input name="cantidad_agua" placeholder="Cantidad de Agua (L)" value={riego.cantidad_agua} onChange={handleChange} required />
            <input name="duracion" placeholder="Duración (min)" value={riego.duracion} onChange={handleChange} required />
            <input name="fecha_riego" type="date" value={riego.fecha_riego} onChange={handleChange} required />
            <button type="submit">Agregar Riego</button>
        </form>
    );
};

export default RiegoCreateForm;
