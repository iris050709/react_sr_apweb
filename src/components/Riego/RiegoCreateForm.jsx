import React, { useState } from "react";
import './RiegoCreateForm.css'; // Importa el archivo de estilos

const RiegoCreateForm = ({ onCreate }) => {
    const [riego, setRiego] = useState({ valvula_id: "", cantidad_agua: "", duracion: "", fecha_riego: "" });

    const handleChange = (e) => {
        setRiego({ ...riego, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", riego);
        onCreate(riego);
        setRiego({ valvula_id: "", cantidad_agua: "", duracion: "", fecha_riego: "" });
    };

    const handleCancel = () => {
        setRiego({ valvula_id: "", cantidad_agua: "", duracion: "", fecha_riego: "" });
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Riego</h2>
            <form className="riego-form" onSubmit={handleSubmit}>
                <label>ID Válvula:</label>
                <input
                    className="input-field"
                    name="valvula_id"
                    placeholder="ID Válvula"
                    value={riego.valvula_id}
                    onChange={handleChange}
                />
                <label>Cantidad de Agua (L):</label>
                <input
                    className="input-field"
                    name="cantidad_agua"
                    placeholder="Cantidad de Agua (L)"
                    value={riego.cantidad_agua}
                    onChange={handleChange}
                    required
                />
                <label>Duración (min):</label>
                <input
                    className="input-field"
                    name="duracion"
                    placeholder="Duración (min)"
                    value={riego.duracion}
                    onChange={handleChange}
                    required
                />
                <label>Fecha de Riego:</label>
                <input
                    className="input-field"
                    name="fecha_riego"
                    type="date"
                    value={riego.fecha_riego}
                    onChange={handleChange}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Agregar Riego</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RiegoCreateForm;
