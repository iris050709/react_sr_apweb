import { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser, checkEmailExists } from '../services/UserService';

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener la lista de usuarios al cargar el componente
    useEffect(() => {
        fetchUsers();
    }, []);

    // Función para obtener los usuarios desde la API
    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            // Validar que los usuarios tengan los campos requeridos
            const validUsers = data.filter(user => user.id && user.nombre); // Filtrar usuarios válidos
            setUsers(validUsers);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    };
    
    // Función para agregar un nuevo usuario
    const addUser = async (user) => {
        try {
            const newUser = await createUser(user);
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } catch (error) {
            console.error("Error al agregar usuario:", error);
        }
    };

    // Función para actualizar un usuario
    const editUser = async (userId, userData) => {
        await updateUser(userId, userData);
        fetchUsers();
    };

    // Función para eliminar un usuario
    const deleteUserDetails = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
        }
    };

    return { users, loading, addUser, editUser, deleteUserDetails, checkEmailExists };
}
