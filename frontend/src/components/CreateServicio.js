import React, { useState } from "react";
import "../style.css";

function CreateServicio({ onServicioCreated }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleCreateServicio = async () => {
    const nuevoServicio = {
      nombre,
      descripcion
    };

    try {
      const response = await fetch("http://localhost:3000/servicios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoServicio)
      });

      if (response.ok) {
        // Limpiar los campos después de una creación exitosa
        setNombre("");
        setDescripcion("");

        // Llama a la función onServicioCreated para notificar que se ha creado un nuevo servicio
        onServicioCreated();

        alert("Servicio creado con éxito");
      } else {
        alert("Error al crear el servicio.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="create-servicio-form">
      <h2>Crear un nuevo Servicio</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>
      <button onClick={handleCreateServicio}>Crear Servicio</button>
    </div>
  );
}

export default CreateServicio;