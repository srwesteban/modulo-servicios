import React from 'react';
import ServiciosList from '../src/components/ServiciosList'; // Asegúrate de que la ruta sea correcta
import CreateServicio from '../src/components/CreateServicio';
function App() {
  return (
    <div className="App">
      <ServiciosList />
      <CreateServicio/>
    </div>
  );
}

export default App;
