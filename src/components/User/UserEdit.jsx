import React, { useState, useEffect } from 'react';

const UserEditForm = ({ user, onUpdate, onCancel }) => {
    const [nombre, setNombre] = useState(user.nombre);
    const [correo, setCorreo] = useState(user.correo);
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState(user.rol);
    const [fechaNacimiento, setFechaNacimiento] = useState(user.fecha_nacimiento);
    const [sexo, setSexo] = useState(user.sexo);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !correo || !rol || !fechaNacimiento || !sexo) {
            alert("Todos los campos son obligatorios");
            return;
        }

        const updatedUser = {
            ...user,
            nombre,
            correo,
            password,
            rol,
            fecha_nacimiento: fechaNacimiento,
            sexo,
        };

        onUpdate(updatedUser);
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
                <label>Password (leave blank to keep the same)</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
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
            <button type="submit">Actualizar Usuario</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default UserEditForm;
