import React from 'react'

function App () {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col'>
        <h2>Formulario de Usuarios</h2>
        <form className='form-group'>
          
          <input className='form-control'
          placeholder='Introduce el nombre'
          type='text'>
          </input>

          <input className='form-control mt-3'
          placeholder='Introduce el apellido'
          type='text'>
          </input>

          <input type="submit" value="Registrar" className='btn btn-dark w-100 mt-3'/>

        </form>
      </div>

      <div className='col'>
          <h2>
            Lista de tu Agenda
          </h2>
      </div>
      </div>
    </div>
  )
}

export default App