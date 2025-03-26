const BASE_URL = "http://127.0.0.1:5000/users/";
const CHECK_EMAIL_URL = "http://127.0.0.1:5000/users/check-email";
const LOGIN_URL = "http://127.0.0.1:5000/users/login";

export async function loginUser(correo, password) {
    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo: correo.trim().toLowerCase(), password }),
        });

        if (!response.ok) {
            const result = await response.json();
            alert(`⚠️ Error: ${result.message || "Correo o contraseña incorrectos"}`);
            return null;
        }

        const result = await response.json();
        alert("✅ Inicio de sesión exitoso");
        return result; // Aquí podrías retornar la información del usuario o un token, según lo que el backend devuelva.
    } catch (error) {
        console.error("❌ Error en loginUser:", error);
    }
}

export async function checkEmailExists(correo) {
    try {
        const response = await fetch(CHECK_EMAIL_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo: correo.trim().toLowerCase() }),
        });

        const result = await response.json();
        return result.exists;
    } catch (error) {
        console.error("Error en checkEmailExists:", error);
        return false;
    }
}

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
        const emailExists = await checkEmailExists(user.correo);
        if (emailExists) {
            alert("⚠️ Este correo ya está registrado. Por favor, usa otro.");
            return null;
        }

        const formData = new FormData();
        formData.append("nombre", user.nombre);
        formData.append("correo", user.correo.trim().toLowerCase());
        formData.append("password", user.password);
        formData.append("rol", user.rol);
        formData.append("fecha_nacimiento", user.fecha_nacimiento);
        formData.append("sexo", user.sexo);
        if (foto) {
            formData.append("foto", foto);
        }

        const response = await fetch(BASE_URL, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
            alert(`⚠️ Error: ${result.message || "Ocurrió un error en el servidor"}`);
            return null;
        }

        alert("✅ Usuario creado correctamente");
        return result;
    } catch (error) {
        console.error("❌ Error en createUser:", error);
    }
}

export async function updateUser(userId, user) {
    try {
        // Obtener los datos actuales del usuario
        const currentUserResponse = await fetch(`${BASE_URL}${userId}`);
        if (!currentUserResponse.ok) {
            throw new Error("No se pudo obtener la información del usuario actual");
        }
        const currentUser = await currentUserResponse.json();

        // Solo validar el correo si es diferente al que ya tiene registrado
        if (user.correo.trim().toLowerCase() !== currentUser.correo) {
            const emailExists = await checkEmailExists(user.correo);
            if (emailExists) {
                alert("⚠️ El correo ya está en uso por otro usuario.");
                return null;
            }
        }

        user.correo = user.correo.trim().toLowerCase();
        const response = await fetch(`${BASE_URL}${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(`⚠️ Error: ${result.message || "Ocurrió un error al actualizar"}`);
            return null;
        }

        alert("✅ Usuario actualizado correctamente");
        return result;
    } catch (error) {
        console.error("❌ Error en updateUser:", error);
    }
}

export async function deleteUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}${userId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
        }
        return response.json();
    } catch (error) {
        console.error("Error en deleteUser:", error);
    }
}
