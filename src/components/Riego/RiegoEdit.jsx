import React, { useState, useEffect } from "react";
import './RiegoEditForm.css'; // Importa el archivo de estilos

const RiegoEditForm = ({ riego, onUpdate, onCancel }) => {
  const [updatedRiego, setUpdatedRiego] = useState(riego);

  useEffect(() => {
    setUpdatedRiego(riego);
  }, [riego]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedRiego); // Llamar a onUpdate para actualizar el riego
    onCancel(); // Volver a la vista de creación
  };

  return (
    <div className="form-container">
      <h2>Editar Riego</h2>
      <form className="riego-form" onSubmit={handleSubmit}>
        <label>ID Válvula:</label>
        <input
          className="input-field"
          type="text"
          value={updatedRiego.valvula_id || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, valvula_id: e.target.value })}
        />
        <label>Cantidad de Agua (L):</label>
        <input
          className="input-field"
          type="number"
          value={updatedRiego.cantidad_agua || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, cantidad_agua: e.target.value })}
        />
        <label>Duración (min):</label>
        <input
          className="input-field"
          type="number"
          value={updatedRiego.duracion || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, duracion: e.target.value })}
        />
        <div className="form-buttons">
          <button className="submit-button" type="submit">Actualizar</button>
          <button className="cancel-button" type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default RiegoEditForm;
