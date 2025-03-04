import React, { useState, useEffect } from "react";

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
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="usuario_id"
                value={updatedConfig.usuario_id}
                onChange={handleChange}
                required
            />
            <input
                name="umbral_humedad"
                type="number"
                value={updatedConfig.umbral_humedad}
                onChange={handleChange}
                required
            />
            <input
                name="horario"
                value={updatedConfig.horario}
                onChange={handleChange}
                required
            />
            <label>
                Activo:
                <input
                    type="checkbox"
                    name="activo"
                    checked={updatedConfig.activo}
                    onChange={(e) => setUpdatedConfig({ ...updatedConfig, activo: e.target.checked })}
                />
            </label>
            <button type="submit">Actualizar Configuración</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default RiegoConfigEditForm;
