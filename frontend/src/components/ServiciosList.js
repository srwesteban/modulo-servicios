import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; // Asegúrate de que react-icons/fa esté importado

import UpdateServicio from './UpdateServicio';

function ServiciosList() {
  const [servicios, setServicios] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [servicioAEditar, setServicioAEditar] = useState(null);

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener la lista de servicios desde el servidor
    fetch('http://localhost:3000/servicios')
      .then(response => response.json())
      .then(data => setServicios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Ordena los servicios por su id
  servicios.sort((a, b) => a.id - b.id);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/servicios/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Elimina el servicio de la lista después de la eliminación exitosa
        setServicios(servicios.filter(servicio => servicio.id !== id));
      } else {
        console.error('Error al eliminar el servicio.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (servicio) => {
    setServicioAEditar(servicio);
  };

  const handleUpdate = (id, nuevoNombre, nuevaDescripcion) => {
    // Actualiza el estado de los servicios con los nuevos datos
    setServicios(servicios.map(servicio => {
      if (servicio.id === id) {
        return { ...servicio, nombre: nuevoNombre, descripcion: nuevaDescripcion };
      }
      return servicio;
    }));
    setServicioAEditar(null);
  };
  

  return (
    <div>
      <h1>Lista de Servicios</h1>
      <button onClick={() => setMostrarLista(!mostrarLista)}>Mostrar Lista de Servicios</button>
      {mostrarLista && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map(servicio => (
              <tr key={servicio.id}>
                <td>{servicio.id}</td>
                <td>{servicio.nombre}</td>
                <td>{servicio.descripcion}</td>
                <td>
                  <button onClick={() => handleEdit(servicio)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(servicio.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {servicioAEditar && (
        <UpdateServicio
          servicio={servicioAEditar}
          onUpdateServicio={handleUpdate}
        />
      )}
    </div>
  );
}

export default ServiciosList;
