import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import UpdateServicio from './UpdateServicio';
import '../style.css';

function ServiciosList() {
  const [servicios, setServicios] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [servicioAEditar, setServicioAEditar] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/servicios')
      .then(response => response.json())
      .then(data => setServicios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Ordena la lista por su id
  servicios.sort((a, b) => a.id - b.id);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/servicios/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setServicios(servicios.filter((servicio) => servicio.id !== id));
        loadServicios();
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
    setServicios(servicios.map((servicio) => {
      if (servicio.id === id) {
        return { ...servicio, nombre: nuevoNombre, descripcion: nuevaDescripcion };
      }
      return servicio;
    }));
    setServicioAEditar(null);
    loadServicios(); 
  };

  const loadServicios = () => {
    fetch('http://localhost:3000/servicios')
      .then((response) => response.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="servicios-list-container">
      <h1>Lista de Servicios</h1>
      <button className="toggle-list-button" onClick={() => setMostrarLista(!mostrarLista)}>
        {mostrarLista ? 'Ocultar Lista de Servicios' : 'Mostrar Lista de Servicios'}
      </button>
      {mostrarLista && (
        <table className="servicios-table">
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
                  <button className="edit-button" onClick={() => handleEdit(servicio)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(servicio.id)}>
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
