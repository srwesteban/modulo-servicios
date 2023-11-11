
function DeleteServicio({ servicioId, onDeleteServicio }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/servicios/${servicioId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Llama a la función onDeleteServicio para notificar que se ha eliminado el servicio
        onDeleteServicio();
      } else {
        console.error('Error al eliminar el servicio.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar Servicio</button>
    </div>
  );
}

export default DeleteServicio;
