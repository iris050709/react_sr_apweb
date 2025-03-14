import React, { useState } from "react";

const RiegoConfigCreateForm = ({ onCreate, usuarios }) => {
    const [config, setConfig] = useState({
        usuario_id: "",
        umbral_humedad: "",
        horario: "",
        activo: 1,
    });

    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Configuración a enviar:", config);
        onCreate(config);
        setConfig({ usuario_id: "", umbral_humedad: "", horario: "", activo: 1 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="usuario_id">Selecciona un Usuario</label>
            <select
                name="usuario_id"
                value={config.usuario_id}
                onChange={handleChange}
                required
            >
                <option value="">Seleccione un usuario</option>
                {usuarios.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.id} - {user.nombre}
                    </option>
                ))}
            </select>

            <input
                name="umbral_humedad"
                type="number"
                placeholder="Umbral de Humedad"
                value={config.umbral_humedad}
                onChange={handleChange}
                required
            />

            <label htmlFor="horario">Horario</label>
            <input
                name="horario"
                type="time"
                value={config.horario}
                onChange={handleChange}
                required
            />

            <label>
                Activo:
                <input
                    type="checkbox"
                    name="activo"
                    checked={config.activo === 1}
                    onChange={(e) => setConfig({ ...config, activo: e.target.checked ? 1 : 0 })}
                />
            </label>

            <button type="submit">Crear Configuración</button>
        </form>
    );
};

export default RiegoConfigCreateForm;
