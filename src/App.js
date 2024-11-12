import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el archivo CSS

/******
 npm start para ejecutar la app 
 *******/

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [profesion, setProfesion] = useState('');

  // Cargar datos del localStorage al iniciar la aplicación
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('perfil'));

    if (datosGuardados) {
      setNombre(datosGuardados.nombre || '');
      setApellido(datosGuardados.apellido || '');
      setNacionalidad(datosGuardados.nacionalidad || '');
      setProfesion(datosGuardados.profesion || '');
    }
  }, []); // Solo se ejecuta una vez al iniciar la app

  // Guardar datos en el localStorage cuando cambien, solo si están completos
  useEffect(() => {
    if (nombre || apellido || nacionalidad || profesion) { // Si algún campo no está vacío
      const datos = {
        nombre,
        apellido,
        nacionalidad,
        profesion,
      };
      localStorage.setItem('perfil', JSON.stringify(datos));
    }
  }, [nombre, apellido, nacionalidad, profesion]);

  return (
    <div className="App">
      <h1>Formulario de Información Personal</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            type="text"
            id="nacionalidad"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profesion">Profesión:</label>
          <input
            type="text"
            id="profesion"
            value={profesion}
            onChange={(e) => setProfesion(e.target.value)}
          />
        </div>
      </form>

      <div className="profile-card">
        <h2>Perfil</h2>
        <p><strong>Nombre:</strong> {nombre} {apellido}</p>
        <p><strong>Nacionalidad:</strong> {nacionalidad}</p>
        <p><strong>Profesión:</strong> {profesion}</p>
      </div>
    </div>
  );
}

export default App;
