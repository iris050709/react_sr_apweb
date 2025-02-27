import React, { useState } from "react";
import "./style.css";

const RegistroSensorList = ({ registros }) => {
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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No hay registros de sensores disponibles
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

export default RegistroSensorList;
