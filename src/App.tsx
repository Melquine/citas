import { useState } from 'react'
import Form from './components/Form'
import Citas from './components/Citas'
import { ICita } from './interfaces/app_interface'

import './App.css'

function App() {
  const [citas, setCitas] = useState<ICita[]>([])

  const addTask = (params: ICita, update:(x:ICita)=>void) => {
    const ID = Math.random().toString(36)
    const newCita = {...params, id: ID, update}
     setCitas([
      ...citas,
      newCita
    ]) 
  }

  const deleteCita = (citaId: string) => {
    setCitas(citas.filter((cita: ICita) => {
      return cita.id !== citaId
    }))
  }

  const editCita = (newCita:ICita):void => {
    const editCita = citas.map((cita:ICita) => {
      if(cita.id === newCita.id) {
        return newCita
      }
      return cita
    })

    setCitas([
      ...editCita
    ])
  }

  const finishedCita = (citaId: string) => {
    let newCitas = citas.map((cita: ICita) => {
      if(cita.id === citaId) {
        return { ...cita, completed: !cita.completed }
      }
      return cita
    })

    setCitas([
      ...newCitas
    ])
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>

          <div className='nueva-cita'>
            <h1>Nueva cita</h1>
            <div className='form-cont'>
              <Form addTask={addTask} editCita={editCita}/>
            </div>
          </div>

        </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>

          <div className='tus-citas'>
            
            {citas.length ? <h2>Tus citas</h2> : <h2>No hay citas</h2>}
            <div className='citas-cont'>
              {
                citas.map((cita: ICita, index: number) => {
                return <Citas key={index}
                cita={cita}
                deleteCita={deleteCita}
                finishedCita={finishedCita}
                />
                })
              }
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
