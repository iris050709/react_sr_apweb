const BASE_URL = "http://127.0.0.1:5000/users/";

export async function getAllUsers() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Error al obtener la lista de usuarios");
        }
        return response.json();
    } catch (error) {
        console.error("Error en getAllUsers:", error);
        return [];
    }
}

export async function createUser(user, foto) {
    try {
        const formData = new FormData();
        formData.append('nombre', user.nombre);
        formData.append('correo', user.correo);
        formData.append('password', user.password);
        formData.append('rol', user.rol);
        formData.append('fecha_nacimiento', user.fecha_nacimiento);
        formData.append('sexo', user.sexo);
        if (foto) {
            formData.append('foto', foto);
        }

        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Error al crear el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en createUser:", error);
    }
}


export async function updateUser(userId, user, foto) {
    try {
        const formData = new FormData();
        formData.append('nombre', user.nombre);
        formData.append('correo', user.correo);
        formData.append('password', user.password);
        formData.append('rol', user.rol);
        formData.append('fecha_nacimiento', user.fecha_nacimiento);
        formData.append('sexo', user.sexo);
        if (foto) {
            formData.append('foto', foto);
        }

        const response = await fetch(`${BASE_URL}${userId}`, {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Error al actualizar el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en updateUser:", error);
    }
}


export async function deleteUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}${userId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en deleteUser:", error);
    }
}
