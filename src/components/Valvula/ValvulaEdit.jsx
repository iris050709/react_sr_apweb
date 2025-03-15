import React, { useState, useEffect } from "react";
import './ValvulaEditForm.css'; // Importa el archivo de estilos

const ValvulaEditForm = ({ valvula, onUpdate, onCancel }) => {
    const [nombre, setNombre] = useState(valvula.nombre);
    const [ubicacion, setUbicacion] = useState(valvula.ubicacion);
    const [estado, setEstado] = useState(valvula.estado);

    useEffect(() => {
        setNombre(valvula.nombre);
        setUbicacion(valvula.ubicacion);
        setEstado(valvula.estado);
    }, [valvula]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedValvula = { nombre, ubicacion, estado };
        onUpdate(valvula.id, updatedValvula);
        onCancel(); // Volver a la vista de creación
    };

    return (
        <div className="form-container">
            <h2>Editar Válvula</h2>
            <form className="valvula-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <label>Ubicación:</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Ubicación"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                />
                <label>Estado:</label>
                <select
                    className="input-field"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="Abierta">Abierta</option>
                    <option value="Cerrada">Cerrada</option>
                </select>
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Válvula</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ValvulaEditForm;
