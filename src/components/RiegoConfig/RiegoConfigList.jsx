import React, { useState } from "react";
import "../style.css";

const RiegoConfigList = ({ configuraciones, onDelete, onEdit }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const configuracionesPerPage = 5;
    const totalPages = Math.ceil(configuraciones.length / configuracionesPerPage);

    const indexOfLastConfig = currentPage * configuracionesPerPage;
    const indexOfFirstConfig = indexOfLastConfig - configuracionesPerPage;
    const currentConfiguraciones = configuraciones.slice(indexOfFirstConfig, indexOfLastConfig);

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
                        <th>ID Usuario</th>
                        <th>Umbral de Humedad</th>
                        <th>Horario</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {currentConfiguraciones && currentConfiguraciones.length > 0 ? (
                    currentConfiguraciones.map((config) => (
                        <tr key={config.id}>
                            <td>{config.id}</td>
                            <td>{config.usuario_id || "No asignado"}</td>
                            <td>{config.umbral_humedad}%</td>
                            <td>{config.horario}</td>
                            <td>{config.activo ? "Sí" : "No"}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="edit-btn" 
                                    onClick={() => onEdit(config)}
                                >
                                    Editar
                                </button>
                                <button 
                                    type="button" 
                                    className="delete-btn" 
                                    onClick={() => onDelete(config.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center">
                            No hay configuraciones de riego disponibles
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

export default RiegoConfigList;
