import React, { useState, useEffect } from "react";
import './RiegoConfigEditForm.css'; // Importa el archivo de estilos

const RiegoConfigEditForm = ({ config, onUpdate, onCancel }) => {
    const [updatedConfig, setUpdatedConfig] = useState(config);

    useEffect(() => {
        setUpdatedConfig(config); // Para cuando se pasa una nueva configuración para editar
    }, [config]);

    const handleChange = (e) => {
        setUpdatedConfig({ ...updatedConfig, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedConfig.id, updatedConfig);
            onCancel(); // Regresar a la vista anterior inmediatamente después de la actualización
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Configuración de Riego</h2>
            <form className="riego-config-form" onSubmit={handleSubmit}>
                <label>ID Usuario:</label>
                <input
                    className="input-field"
                    name="usuario_id"
                    value={updatedConfig.usuario_id}
                    onChange={handleChange}
                    required
                />
                <label>Umbral de Humedad:</label>
                <input
                    className="input-field"
                    name="umbral_humedad"
                    type="number"
                    value={updatedConfig.umbral_humedad}
                    onChange={handleChange}
                    required
                />
                <label>Horario:</label>
                <input
                    className="input-field"
                    name="horario"
                    value={updatedConfig.horario}
                    onChange={handleChange}
                    required
                />
                <label>
                    Activo:
                    <input
                        className="input-field"
                        type="checkbox"
                        name="activo"
                        checked={updatedConfig.activo}
                        onChange={(e) => setUpdatedConfig({ ...updatedConfig, activo: e.target.checked })}
                    />
                </label>
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Configuración</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default RiegoConfigEditForm;
