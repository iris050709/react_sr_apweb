import React, { useState } from 'react';

const UserCreateForm = ({ onCreate }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [sexo, setSexo] = useState('');
    const [foto, setFoto] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !correo || !password || !rol || !fechaNacimiento || !sexo) {
            alert("Todos los campos son obligatorios");
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

        // Clear form fields
        setNombre('');
        setCorreo('');
        setPassword('');
        setRol('');
        setFechaNacimiento('');
        setSexo('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    value={correo} 
                    onChange={(e) => setCorreo(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Rol</label>
                <input 
                    type="text" 
                    value={rol} 
                    onChange={(e) => setRol(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Fecha de Nacimiento</label>
                <input 
                    type="date" 
                    value={fechaNacimiento} 
                    onChange={(e) => setFechaNacimiento(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Sexo</label>
                <input 
                    type="text" 
                    value={sexo} 
                    onChange={(e) => setSexo(e.target.value)} 
                    required
                />
            </div>
            <button type="submit">Crear Usuario</button>
        </form>
    );
};

export default UserCreateForm;