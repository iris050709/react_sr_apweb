import React, { useState } from "react";
import "./style.css";

const SensorList = ({ sensores }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const sensoresPerPage = 5;
    const totalPages = Math.ceil(sensores.length / sensoresPerPage);

    // Calcular los índices de los registros a mostrar
    const indexOfLastSensor = currentPage * sensoresPerPage;
    const indexOfFirstSensor = indexOfLastSensor - sensoresPerPage;
    const currentSensores = sensores.slice(indexOfFirstSensor, indexOfLastSensor);

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
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Ubicación</th>
                        <th>Fecha de Instalación</th>
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
                                <td>{sensor.fecha_instalacion}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No hay sensores registrados
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

export default SensorList;
