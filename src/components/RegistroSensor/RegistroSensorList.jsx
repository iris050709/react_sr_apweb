import React, { useState } from "react";
import "../style.css"; // Asegúrate de que este archivo esté correctamente vinculado

// Componente para mostrar los registros de sensores
const RegistroSensorList = ({ registros, onEdit, onDelete, onCreate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const registrosPerPage = 5;
    const totalPages = Math.ceil(registros.length / registrosPerPage);

    // Calcular los índices de los registros a mostrar
    const indexOfLastRegistro = currentPage * registrosPerPage;
    const indexOfFirstRegistro = indexOfLastRegistro - registrosPerPage;
    const currentRegistros = registros.slice(indexOfFirstRegistro, indexOfLastRegistro);

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
                        <th>ID Sensor</th>
                        <th>Valor</th>
                        <th>Fecha de Registro</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRegistros.length > 0 ? (
                        currentRegistros.map((registro) => (
                            <tr key={registro.id}>
                                <td>{registro.id}</td>
                                <td>{registro.sensor_id ? registro.sensor_id : "No asignado"}</td>
                                <td>{registro.valor}</td>
                                <td>{registro.fecha_registro}</td>
                                <td>
                                    <div className="action-btns">
                                        <button
                                            type="button"
                                            className="edit-btn"
                                            onClick={() => onEdit(registro)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button"
                                            className="delete-btn"
                                            onClick={() => onDelete(registro.id)}
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
                                No hay registros de sensores disponibles
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
                    disabled={currentPage === totalPages}
                    aria-label="Página siguiente"
                >
                    Siguiente »
                </button>
            </div>
        </div>
    );
};

export default RegistroSensorList;
