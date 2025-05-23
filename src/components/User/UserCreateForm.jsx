import React, { useState } from "react";
import './UserCreateForm.css';

const UserCreateForm = ({ onCreate, checkEmailExists }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [sexo, setSexo] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !correo || !password || !rol || !fechaNacimiento || !sexo) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (!validatePassword(password)) {
            setError("La contraseña debe tener al menos 10 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
            return;
        }

        // Validar edad
        const birthDate = new Date(fechaNacimiento);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
        if (age < 18) {
            setError("Debes tener al menos 18 años.");
            return;
        }

        // Verificar si el correo ya existe
        const emailExists = await checkEmailExists(correo);
        if (emailExists) {
            setError("⚠️ Este correo ya está registrado. Por favor, usa otro.");
            return;
        }

        const newUser = {
            nombre,
            correo,
            password,
            rol,
            fecha_nacimiento: fechaNacimiento,
            sexo,
        };

        onCreate(newUser);

        // Limpiar campos
        setNombre('');
        setCorreo('');
        setPassword('');
        setRol('');
        setFechaNacimiento('');
        setSexo('');
        setError('');
    };

    const handleCancel = () => {
        setNombre('');
        setCorreo('');
        setPassword('');
        setRol('');
        setFechaNacimiento('');
        setSexo('');
        setError('');
    };

    return (
        <div className="form-container">
            <h2>Crear Nuevo Usuario</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="user-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    placeholder="Nombre"
                />
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
                <label>Rol:</label>
                <select
                    className="input-field"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                    required
                >
                    <option value="">Seleccione Rol</option>
                    <option value="Administrador">Administrador</option>
                </select>
                <label>Fecha de Nacimiento:</label>
                <input
                    className="input-field"
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
                <label>Sexo:</label>
                <select
                    className="input-field"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                >
                    <option value="">Seleccione Sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Crear Usuario</button>
                    <button className="cancel-button" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default UserCreateForm;
