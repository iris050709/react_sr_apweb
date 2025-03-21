import React, { useState } from "react";
import "../style.css"; // Asegúrate de que este archivo esté correctamente vinculado

const UsersList = ({ users, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.length > 0 ? (
                        currentUsers.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <div className="action-btns">
                                        <button type="button" className="edit-btn" onClick={() => onEdit(usuario)}>
                                            Editar
                                        </button>
                                        <button 
                                            type="button" 
                                            className="delete-btn" 
                                            onClick={() => onDelete(usuario.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No hay usuarios disponibles
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button 
                    type="button" 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    aria-label="Página anterior"
                >
                    « Anterior
                </button>
                <span>Página {currentPage} de {totalPages || 1}</span>
                <button 
                    type="button" 
                    onClick={nextPage} 
                    disabled={currentPage >= totalPages}
                    aria-label="Página siguiente"
                >
                    Siguiente »
                </button>
            </div>
        </div>
    );
};

export default UsersList;
