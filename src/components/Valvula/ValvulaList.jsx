import React, { useState } from "react";
import "../style.css"; // Asegúrate de que este archivo esté correctamente vinculado

const ValvulaList = ({ valvulas, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const valvulasPerPage = 5;
    const totalPages = Math.ceil(valvulas.length / valvulasPerPage);

    // Calcular el índice del primer y último valvula a mostrar
    const indexOfLastValvula = currentPage * valvulasPerPage;
    const indexOfFirstValvula = indexOfLastValvula - valvulasPerPage;
    const currentValvulas = valvulas.slice(indexOfFirstValvula, indexOfLastValvula);

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
                        <th>Ubicación</th>
                        <th>Estado</th>
                        <th>Fecha de Instalación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentValvulas.length > 0 ? (
                        currentValvulas.map((valvula) => (
                            <tr key={valvula.id}>
                                <td>{valvula.id}</td>
                                <td>{valvula.nombre}</td>
                                <td>{valvula.ubicacion || "No especificado"}</td>
                                <td className={valvula.estado === "Abierta" ? "estado-abierto" : "estado-cerrado"}>
                                    {valvula.estado}
                                </td>
                                <td>
                                    {valvula.fecha_instalacion && !isNaN(new Date(valvula.fecha_instalacion).getTime()) 
                                        ? new Intl.DateTimeFormat("es-ES").format(new Date(valvula.fecha_instalacion)) 
                                        : "Fecha inválida"}
                                </td>
                                <td>
                                    <div className="action-btns">
                                        <button 
                                            type="button" 
                                            className="edit-btn" 
                                            onClick={() => onEdit(valvula)}
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            type="button" 
                                            className="delete-btn" 
                                            onClick={() => onDelete(valvula.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No hay válvulas registradas</td>
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

export default ValvulaList;
