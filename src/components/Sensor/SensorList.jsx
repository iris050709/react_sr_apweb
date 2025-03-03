import React, { useState } from "react";

const SensorList = ({ sensores, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const sensoresPerPage = 5;

    const indexOfLastSensor = currentPage * sensoresPerPage;
    const indexOfFirstSensor = indexOfLastSensor - sensoresPerPage;
    const currentSensores = sensores.slice(indexOfFirstSensor, indexOfLastSensor);

    const totalPages = Math.ceil(sensores.length / sensoresPerPage);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Ubicación</th>
                        <th>Fecha de Instalación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSensores.length > 0 ? (
                        currentSensores.map((sensor) => (
                            <tr key={sensor.id}>
                                <td>{sensor.id}</td>
                                <td>{sensor.nombre}</td>
                                <td>{sensor.tipo}</td>
                                <td>{sensor.ubicacion || "No especificado"}</td>
                                <td>
                                {sensor.fecha_instalacion && !isNaN(new Date(sensor.fecha_instalacion).getTime()) 
                                    ? new Intl.DateTimeFormat("es-ES").format(new Date(sensor.fecha_instalacion)) 
                                    : "Fecha inválida"}
                                </td>

                                <td>
                                    <button type="button" className="edit-btn" onClick={() => onEdit(sensor)}>
                                        Editar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="delete-btn" 
                                        onClick={() => onDelete(sensor.id)}
                                    >
                                        Eliminar
                                    </button>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No hay sensores registrados</td>
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

export default SensorList;
