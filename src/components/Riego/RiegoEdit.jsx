import React, { useState, useEffect } from "react";

const RiegoEditForm = ({ riego, onUpdate, onCancel }) => {
  const [updatedRiego, setUpdatedRiego] = useState(riego);

  useEffect(() => {
    setUpdatedRiego(riego);
  }, [riego]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedRiego); // Llamar a onUpdate para actualizar el riego
    onCancel(); // Cerrar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID Válvula:</label>
        <input
          type="text"
          value={updatedRiego.valvula_id || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, valvula_id: e.target.value })}
        />
      </div>
      <div>
        <label>Cantidad de Agua:</label>
        <input
          type="number"
          value={updatedRiego.cantidad_agua || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, cantidad_agua: e.target.value })}
        />
      </div>
      <div>
        <label>Duración:</label>
        <input
          type="number"
          value={updatedRiego.duracion || ""}
          onChange={(e) => setUpdatedRiego({ ...updatedRiego, duracion: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">Actualizar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};


export default RiegoEditForm;
