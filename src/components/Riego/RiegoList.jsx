import React, { useState } from "react";
import "../style.css"; // Asegúrate de que este archivo esté correctamente vinculado

const RiegoList = ({ riegos, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const riegosPerPage = 5;

    const indexOfLastRiego = currentPage * riegosPerPage;
    const indexOfFirstRiego = indexOfLastRiego - riegosPerPage;
    const currentRiegos = riegos.slice(indexOfFirstRiego, indexOfLastRiego);

    const totalPages = Math.ceil(riegos.length / riegosPerPage);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Válvula</th>
                        <th>Cantidad de Agua (L)</th>
                        <th>Duración (min)</th>
                        <th>Fecha de Riego</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRiegos.length > 0 ? (
                        currentRiegos.map((riego) => (
                            <tr key={riego.id}>
                                <td>{riego.id}</td>
                                <td>{riego.valvula_id ? riego.valvula_id : "No asignado"}</td>
                                <td>{riego.cantidad_agua}</td>
                                <td>{riego.duracion}</td>
                                <td>{riego.fecha_riego}</td>
                                <td>
                                    <div className="action-btns">
                                        <button
                                            type="button"
                                            className="edit-btn"
                                            onClick={() => onEdit(riego)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            className="delete-btn"
                                            onClick={() => onDelete(riego.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No hay registros de riego disponibles
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
                <span>
                    Página {currentPage} de {totalPages || 1}
                </span>
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

export default RiegoList;
