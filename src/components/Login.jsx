import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!correo || !password) {
            setError("Por favor, ingresa todos los campos.");
            return;
        }

        // Aquí podrías agregar lógica adicional como verificar si el correo existe
        // o si la contraseña es correcta.

        // Llamar al método onLogin que pasas como prop para autenticar al usuario
        const user = { correo, password }; // Aquí lo que pasa depende de tu API

        const success = await onLogin(user);
        if (!success) {
            setError("Correo o contraseña incorrectos.");
        }
    };

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="user-form" onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    className="input-field"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    placeholder="Correo"
                />
                <label>Password:</label>
                <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Contraseña"
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Iniciar Sesión</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
