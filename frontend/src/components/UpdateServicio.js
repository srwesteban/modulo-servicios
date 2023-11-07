import React, { useState } from 'react';

function UpdateServicio({ servicio, onUpdateServicio }) {
  const [nuevoNombre, setNuevoNombre] = useState(servicio.nombre);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(servicio.descripcion);

  const handleUpdate = async () => {
    const servicioActualizado = {
      id: servicio.id, // Utiliza el ID del servicio directamente
      nombre: nuevoNombre,
      descripcion: nuevaDescripcion,
    };

    try {
      const response = await fetch(`http://localhost:3000/servicios/${servicio.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(servicioActualizado),
      });

      if (response.ok) {
        onUpdateServicio(servicio.id, nuevoNombre, nuevaDescripcion);
      } else {
        console.error('Error al actualizar el servicio.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Servicio</h2>
      <div>
        <label>Nuevo Nombre:</label>
        <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
      </div>
      <div>
        <label>Nueva Descripción:</label>
        <input
          type="text"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Actualizar Servicio</button>
    </div>
  );
}

export default UpdateServicio;
