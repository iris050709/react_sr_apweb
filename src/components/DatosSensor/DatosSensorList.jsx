import React, { useState } from "react";
import "../style.css"; // Asegúrate de que este archivo esté correctamente vinculado

// Componente para mostrar los registros de Datos Sensor
const DatosSensorList = ({ datosSensor = [], onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const datosPerPage = 5;
    const totalPages = Math.ceil(datosSensor.length / datosPerPage);

    // Calcular los índices de los registros a mostrar
    const indexOfLastDato = currentPage * datosPerPage;
    const indexOfFirstDato = indexOfLastDato - datosPerPage;
    const currentDatos = datosSensor.slice(indexOfFirstDato, indexOfLastDato);

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
                        <th>Nivel Temperatura 1</th>
                        <th>Estado Ventilador 1</th>
                        <th>Nivel Temperatura 2</th>
                        <th>Estado Ventilador 2</th>
                        <th>Luz</th>
                        <th>Estado LED</th>
                        <th>Agua Detectada</th>
                        <th>Posición Servo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentDatos.length > 0 ? (
                        currentDatos.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.nivel_temperatura1}</td>
                                <td>{dato.estado_ventilador1}</td>
                                <td>{dato.nivel_temperatura2}</td>
                                <td>{dato.estado_ventilador2}</td>
                                <td>{dato.luz}</td>
                                <td>{dato.estado_led}</td>
                                <td>{dato.agua_detectada}</td>
                                <td>{dato.posicion_servo}</td>
                                <td>
                                    <div className="action-btns">
                                        <button
                                            type="button"
                                            className="delete-btn"
                                            onClick={() => onDelete(dato.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center">
                                No hay registros de Datos Sensor disponibles
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

export default DatosSensorList;
