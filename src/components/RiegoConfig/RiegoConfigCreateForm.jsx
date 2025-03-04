import React, { useState } from "react";

const RiegoConfigCreateForm = ({ onCreate }) => {
    const [config, setConfig] = useState({
        usuario_id: "",
        umbral_humedad: "",
        horario: "",
        activo: true,
    });

    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Configuración a enviar:", config); // Verifica los datos aquí
        onCreate(config);
        setConfig({ usuario_id: "", umbral_humedad: "", horario: "", activo: true });
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="usuario_id"
                placeholder="ID Usuario"
                value={config.usuario_id}
                onChange={handleChange}
                required
            />
            <input
                name="umbral_humedad"
                type="number"
                placeholder="Umbral de Humedad"
                value={config.umbral_humedad}
                onChange={handleChange}
                required
            />
            <input
                name="horario"
                placeholder="Horario"
                value={config.horario}
                onChange={handleChange}
                required
            />
            <label>
                Activo:
                <input
                    type="checkbox"
                    name="activo"
                    checked={config.activo}
                    onChange={(e) => setConfig({ ...config, activo: e.target.checked })}
                />
            </label>
            <button type="submit">Crear Configuración</button>
        </form>
    );
};

export default RiegoConfigCreateForm;
