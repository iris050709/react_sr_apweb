import { useEffect, useState } from "react";
import { getAllUsers } from "../services/UserService";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener usuarios: ", error);
        } finally {
            setLoading(false);
        }
    };

    return { users, loading };
}
