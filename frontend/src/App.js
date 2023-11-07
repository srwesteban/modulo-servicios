import React from 'react';
import ServiciosList from '../src/components/ServiciosList'; // Asegúrate de que la ruta sea correcta
import CreateServicio from '../src/components/CreateServicio';
import DeleteServicio from '../src/components/DeleteServicio';
function App() {
  return (
    <div className="App">
      <ServiciosList />
      <CreateServicio/>
      <DeleteServicio/>
    </div>
  );
}

export default App;
