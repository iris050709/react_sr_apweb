import React, { useState, useEffect } from "react";
import './DatosSensorCreateForm.css'; // Importa el archivo de estilos

const DatosSensorEditForm = ({ dato, onUpdate, onCancel }) => {
    // Establecer los valores iniciales en el estado con los datos recibidos como prop
    const [nivel_temperatura1, setNivelTemperatura1] = useState(dato.nivel_temperatura1 || "");
    const [estado_ventilador1, setEstadoVentilador1] = useState(dato.estado_ventilador1 || "");
    const [nivel_temperatura2, setNivelTemperatura2] = useState(dato.nivel_temperatura2 || "");
    const [estado_ventilador2, setEstadoVentilador2] = useState(dato.estado_ventilador2 || "");
    const [luz, setLuz] = useState(dato.luz || "");
    const [estado_led, setEstadoLed] = useState(dato.estado_led || "");
    const [agua_detectada, setAguaDetectada] = useState(dato.agua_detectada || "");
    const [posicion_servo, setPosicionServo] = useState(dato.posicion_servo || "");
    const [humedad_suelo1, setHumedadSuelo1] = useState(dato.humedad_suelo1 || "");
    const [estado_bomba1, setEstadoBomba1] = useState(dato.estado_bomba1 || "");
    const [estado_bomba2, setEstadoBomba2] = useState(dato.estado_bomba2 || "");
    const [distancia1, setDistancia1] = useState(dato.distancia1 || "");
    const [humedad_suelo2, setHumedadSuelo2] = useState(dato.humedad_suelo2 || "");
    const [estado_bomba3, setEstadoBomba3] = useState(dato.estado_bomba3 || "");
    const [estado_bomba4, setEstadoBomba4] = useState(dato.estado_bomba4 || "");
    const [distancia2, setDistancia2] = useState(dato.distancia2 || "");

    useEffect(() => {
        // Si el dato cambia, actualizamos el estado
        setNivelTemperatura1(dato.nivel_temperatura1 || "");
        setEstadoVentilador1(dato.estado_ventilador1 || "");
        setNivelTemperatura2(dato.nivel_temperatura2 || "");
        setEstadoVentilador2(dato.estado_ventilador2 || "");
        setLuz(dato.luz || "");
        setEstadoLed(dato.estado_led || "");
        setAguaDetectada(dato.agua_detectada || "");
        setPosicionServo(dato.posicion_servo || "");
        setHumedadSuelo1(dato.humedad_suelo1 || "");
        setEstadoBomba1(dato.estado_bomba1 || "");
        setEstadoBomba2(dato.estado_bomba2 || "");
        setDistancia1(dato.distancia1 || "");
        setHumedadSuelo2(dato.humedad_suelo2 || "");
        setEstadoBomba3(dato.estado_bomba3 || "");
        setEstadoBomba4(dato.estado_bomba4 || "");
        setDistancia2(dato.distancia2 || "");
    }, [dato]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDato = {
            nivel_temperatura1, estado_ventilador1, nivel_temperatura2, estado_ventilador2,
            luz, estado_led, agua_detectada, posicion_servo, humedad_suelo1, estado_bomba1,
            estado_bomba2, distancia1, humedad_suelo2, estado_bomba3, estado_bomba4, distancia2
        };
        onUpdate(updatedDato); // Llamar a la función onUpdate con los nuevos datos
    };

    const handleCancel = () => {
        // Limpiar el formulario si se cancela
        onCancel(); // Llamar a la función onCancel, si es necesario
    };

    return (
        <div className="form-container">
            <h2>Editar Dato</h2>
            <form className="registro-form" onSubmit={handleSubmit}>
                <label>Nivel Temperatura 1:</label>
                <input className="input-field" type="text" value={nivel_temperatura1} onChange={(e) => setNivelTemperatura1(e.target.value)} required />
                <label>Estado Ventilador 1:</label>
                <input className="input-field" type="text" value={estado_ventilador1} onChange={(e) => setEstadoVentilador1(e.target.value)} required />
                <label>Nivel Temperatura 2:</label>
                <input className="input-field" type="text" value={nivel_temperatura2} onChange={(e) => setNivelTemperatura2(e.target.value)} required />
                <label>Estado Ventilador 2:</label>
                <input className="input-field" type="text" value={estado_ventilador2} onChange={(e) => setEstadoVentilador2(e.target.value)} required />
                <label>Luz:</label>
                <input className="input-field" type="text" value={luz} onChange={(e) => setLuz(e.target.value)} required />
                <label>Estado LED:</label>
                <input className="input-field" type="text" value={estado_led} onChange={(e) => setEstadoLed(e.target.value)} required />
                <label>Agua Detectada:</label>
                <input className="input-field" type="text" value={agua_detectada} onChange={(e) => setAguaDetectada(e.target.value)} required />
                <label>Posición Servo:</label>
                <input className="input-field" type="text" value={posicion_servo} onChange={(e) => setPosicionServo(e.target.value)} required />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Dato</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default DatosSensorEditForm;
