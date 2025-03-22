import React, { useState } from "react";
import './UserEditForm.css';

const UserEditForm = ({ user, onUpdate, onCancel }) => {
    const [updatedUser, setUpdatedUser] = useState({
        ...user,
        fechaNacimiento: user.fechaNacimiento ? user.fechaNacimiento.split("T")[0] : "",
    });

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
        return regex.test(password);
    };

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!updatedUser.nombre || !updatedUser.correo || !updatedUser.rol || !updatedUser.fecha_nacimiento || !updatedUser.sexo) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // If password is left blank, don't change it
        const passwordToUpdate = updatedUser.password || user.password;

        // Check if password meets criteria if changed
        if (passwordToUpdate && !validatePassword(passwordToUpdate)) {
            alert("La contraseña debe tener al menos 10 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
            return;
        }

        // Check if the user is at least 18 years old
        const birthDate = new Date(updatedUser.fecha_nacimiento);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (age < 18 || (age === 18 && month < 0)) {
            alert("Debes tener al menos 18 años.");
            return;
        }

        // Update user with the (possibly unchanged) password
        if (onUpdate) {
            onUpdate(updatedUser.id, { ...updatedUser, password: passwordToUpdate });
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
                <select
                    className="input-field"
                    name="rol"
                    value={updatedUser.rol}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione Rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Usuario">Usuario</option>
                </select>
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
                <select
                    className="input-field"
                    name="sexo"
                    value={updatedUser.sexo}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione Sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <div className="form-buttons">
                    <button className="submit-button" type="submit">Actualizar Usuario</button>
                    <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default UserEditForm;
