import React, { useState } from "react";
import './UserEditForm.css';

const UserEditForm = ({ user, onUpdate, onCancel }) => {
    const [updatedUser, setUpdatedUser] = useState({
        ...user,
        fechaNacimiento: user.fechaNacimiento ? user.fechaNacimiento.split("T")[0] : "",
    });

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onUpdate) {
            onUpdate(updatedUser.id, updatedUser);
            onCancel();
        } else {
            console.error("onUpdate no está definido");
        }
    };

    return (
        <div className="form-container">
            <h2>Editar Usuario</h2>
            <form className="user-form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    className="input-field"
                    name="nombre"
                    value={updatedUser.nombre}
                    onChange={handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    className="input-field"
                    type="email"
                    name="correo"
                    value={updatedUser.correo}
                    onChange={handleChange}
                    required
                />
                <label>Password (dejar en blanco para no cambiar):</label>
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    value={updatedUser.password || ""}
                    onChange={handleChange}
                />
                <label>Rol:</label>
                <input
                    className="input-field"
                    name="rol"
                    value={updatedUser.rol}
                    onChange={handleChange}
                    required
                />
                <label>Fecha de Nacimiento:</label>
                <input
                    className="input-field"
                    type="date"
                    name="fecha_nacimiento"
                    value={updatedUser.fecha_nacimiento}
                    onChange={handleChange}
                    required
                />
                <label>Sexo:</label>
                <input
                    className="input-field"
                    name="sexo"
                    value={updatedUser.sexo}
                    onChange={handleChange}
                    required
                />
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Usuario</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default UserEditForm;
