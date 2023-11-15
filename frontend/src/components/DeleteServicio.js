
function DeleteServicio({ servicioId, onDeleteServicio }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/servicios/${servicioId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
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
