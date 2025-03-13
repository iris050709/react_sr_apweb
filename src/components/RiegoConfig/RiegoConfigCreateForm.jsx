import React, { useState } from "react";

const RiegoConfigCreateForm = ({ onCreate, onCancel }) => {
    const [config, setConfig] = useState({
        usuario_id: "",
        umbral_humedad: "",
        horario: "",
        activo: 1, // Mantener como 1 o 0, ya que en la base se guarda así
    });

    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newConfig = { ...config };
        console.log("Configuración a enviar:", newConfig);
    
        try {
            onCreate(newConfig); // Llama a la función onCreate
            setConfig({ usuario_id: "", umbral_humedad: "", horario: "", activo: 1 }); // Restablece
        } catch (error) {
            console.error("Error al crear la configuración:", error);
            // Aquí podrías mostrar un mensaje de error en la UI
        }
    };
    

    return (
        <div className="form-container">
            <h2>Crear Configuración de Riego</h2>
            <form onSubmit={handleSubmit}>
                <label>ID Usuario:</label>
                <input
                    name="usuario_id"
                    placeholder="ID Usuario"
                    value={config.usuario_id}
                    onChange={handleChange}
                    required
                />
                <label>Umbral de Humedad:</label>
                <input
                    name="umbral_humedad"
                    type="number"
                    placeholder="Umbral de Humedad"
                    value={config.umbral_humedad}
                    onChange={handleChange}
                    required
                />
                <label>Horario:</label>
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
                        checked={config.activo === 1} // Comparar con 1 para marcar el checkbox
                        onChange={(e) => setConfig({ ...config, activo: e.target.checked ? 1 : 0 })}
                    />
                </label>
                <div>
                    <button type="submit">Crear Configuración</button>
                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RiegoConfigCreateForm;
