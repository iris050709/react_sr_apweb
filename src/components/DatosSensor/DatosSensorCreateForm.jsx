import React, { useState } from "react";
import './DatosSensorCreateForm.css'; // Importa el archivo de estilos

const DatosSensorCreateForm = ({ onCreate, onCancel }) => {
    const [nivel_temperatura1, setNivelTemperatura1] = useState("");
    const [estado_ventilador1, setEstadoVentilador1] = useState("");
    const [nivel_temperatura2, setNivelTemperatura2] = useState("");
    const [estado_ventilador2, setEstadoVentilador2] = useState("");
    const [luz, setLuz] = useState("");
    const [estado_led, setEstadoLed] = useState("");
    const [agua_detectada, setAguaDetectada] = useState("");
    const [posicion_servo, setPosicionServo] = useState("");
    const [humedad_suelo1, setHumedadSuelo1] = useState("");
    const [estado_bomba1, setEstadoBomba1] = useState("");
    const [estado_bomba2, setEstadoBomba2] = useState("");
    const [distancia1, setDistancia1] = useState("");
    const [humedad_suelo2, setHumedadSuelo2] = useState("");
    const [estado_bomba3, setEstadoBomba3] = useState("");
    const [estado_bomba4, setEstadoBomba4] = useState("");
    const [distancia2, setDistancia2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDato = {
            nivel_temperatura1, estado_ventilador1, nivel_temperatura2, estado_ventilador2,
            luz, estado_led, agua_detectada, posicion_servo, humedad_suelo1, estado_bomba1,
            estado_bomba2, distancia1, humedad_suelo2, estado_bomba3, estado_bomba4, distancia2
        };
        onCreate(newDato);
        // Limpiar el formulario después de enviar los datos
        setNivelTemperatura1("");
        setEstadoVentilador1("");
        setNivelTemperatura2("");
        setEstadoVentilador2("");
        setLuz("");
        setEstadoLed("");
        setAguaDetectada("");
        setPosicionServo("");
        setHumedadSuelo1("");
        setEstadoBomba1("");
        setEstadoBomba2("");
        setDistancia1("");
        setHumedadSuelo2("");
        setEstadoBomba3("");
        setEstadoBomba4("");
        setDistancia2("");
    };

    const handleCancel = () => {
        // Limpiar el formulario si se cancela
        setNivelTemperatura1("");
        setEstadoVentilador1("");
        setNivelTemperatura2("");
        setEstadoVentilador2("");
        setLuz("");
        setEstadoLed("");
        setAguaDetectada("");
        setPosicionServo("");
        setHumedadSuelo1("");
        setEstadoBomba1("");
        setEstadoBomba2("");
        setDistancia1("");
        setHumedadSuelo2("");
        setEstadoBomba3("");
        setEstadoBomba4("");
        setDistancia2("");
        onCancel(); // Llamar a la función onCancel, si es necesario
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Dato</h2>
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
                    <button className="submit-button" type="submit">Crear Dato</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default DatosSensorCreateForm;
