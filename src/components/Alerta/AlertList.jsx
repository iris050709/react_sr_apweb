import React, { useState } from "react";
import "../style.css";

const AlertList = ({ alertas, onDelete, onEdit }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(alertas.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = alertas.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Usuario</th>
                        <th>Mensaje</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map((alerta) => (
                            <tr key={alerta.id}>
                                <td>{alerta.id}</td>
                                <td>{alerta.usuario_id || "No asignado"}</td>
                                <td>{alerta.mensaje}</td>
                                <td>
                                    {alerta.fecha_alerta && !isNaN(new Date(alerta.fecha_alerta).getTime())
                                        ? new Intl.DateTimeFormat("es-ES", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                              hour: "2-digit",
                                              minute: "2-digit",
                                          }).format(new Date(alerta.fecha_alerta))
                                        : "Fecha inválida"}
                                </td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="edit-btn" 
                                        onClick={() => onEdit(alerta)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="delete-btn" 
                                        onClick={() => onDelete(alerta.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No hay alertas disponibles
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

export default AlertList;
