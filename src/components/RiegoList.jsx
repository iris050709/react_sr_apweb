import React, { useState } from "react";
import "./style.css";

const RiegoList = ({ riegos }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const riegosPerPage = 5;
    const totalPages = Math.ceil(riegos.length / riegosPerPage);

    // Calcular los índices de los registros a mostrar
    const indexOfLastRiego = currentPage * riegosPerPage;
    const indexOfFirstRiego = indexOfLastRiego - riegosPerPage;
    const currentRiegos = riegos.slice(indexOfFirstRiego, indexOfLastRiego);

    // Cambiar de página
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No hay registros de riego disponibles
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>&laquo; Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente &raquo;</button>
            </div>
        </div>
    );
};

export default RiegoList;
