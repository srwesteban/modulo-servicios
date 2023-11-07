import React, { useState } from 'react';

function CreateServicio({ onServicioCreated }) {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoServicio = {
      id,
      nombre,
      descripcion,
    };

    try {
      const response = await fetch('http://localhost:3000/servicios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoServicio),
      });

      if (response.ok) {
        // Limpiar los campos después de una creación exitosa
        setId('');
        setNombre('');
        setDescripcion('');

        // Llama a la función onServicioCreated para notificar que se ha creado un nuevo servicio
        onServicioCreated();
      } else {
        console.error('Error al crear el servicio.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Crear un nuevo Servicio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <button type="submit">Crear Servicio</button>
      </form>
    </div>
  );
}

export default CreateServicio;
