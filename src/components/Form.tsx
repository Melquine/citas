import React, { useState, ChangeEvent, FormEvent} from 'react'
import { IAdd, IFullCita, ICita } from '../interfaces/app_interface'
import { validar, isEmpty } from '../helpers/form.helper'
import { useForm } from './useForm'
import './Form.css'

const params:IFullCita = {
    total: { 
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        sintomas: '',
        id: '',
        completed: false,
        edit: false,
        update: (cita: ICita) => {},
    },
    handleChange: ( target :ChangeEvent<HTMLInputElement>) => {},
    reset: () => {}
}

const Form = ({ addTask, editCita }: IAdd) => {
    const { total, handleChange, reset, update} = useForm(params)
    const [err, setErr] = useState<any>({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        sintomas: '',
    })

    
    const handleSubmit = (e: FormEvent) => {

        e.preventDefault()
        const {petName, ownerName, date, time, sintomas} = total
        const result = validar({petName, ownerName, date, time, sintomas})
        setErr(result)
        const isValid = isEmpty(result)

        if(isValid) {
            if(total.edit){
                editCita(total)
            }else {
                addTask(total, update)
            }

            reset()
        }
    }

    return(
        <form>
            <div className='mb-3'>
                <label htmlFor='petname' className='form-label'>Pet name</label>
                <input type='text' className='form-control' id='petname' name='petName' value={total.petName} placeholder='Pet name' onChange={handleChange} />
                {err.petName !== '' ? <label style={{color: 'red'}}>Completar ❌</label> : null}
            
            </div>
            
            <div className="mb-3">
                <label htmlFor='petowner' className='form-label'>Owner name</label>
                <input type='text' className='form-control' id='petowner' name='ownerName' value={total.ownerName} placeholder='Owner name' onChange={handleChange} />
                {err.ownerName !== '' ? <label style={{color: 'red'}}>Completar ❌</label> : null}
            </div>

            <div className="mb-3">
                <label htmlFor='date' className='form-label'>Fecha</label>
                <input type='date' className='form-control' id='date' name='date' value={total.date} onChange={handleChange} />
                {err.date !== '' ? <label style={{color: 'red'}}>Completar ❌</label> : null}
            </div>

            <div className="mb-3">
                <label htmlFor='time' className='form-label'>Hora</label>
                <input type='time' className='form-control' id='time' name='time' value={total.time} onChange={handleChange} />
                {err.time !== '' ? <label style={{color: 'red'}}>Completar ❌</label> : null}
            </div>

            <div className="mb-3">
                <label htmlFor='sintomas' className='form-label'>Sintomas</label>
                <input type='text' className='form-control' id='sintomas' name='sintomas' value={total.sintomas} placeholder='Sintomas' onChange={handleChange} />
                {err.sintomas !== '' ? <label style={{color: 'red'}}>Completar ❌</label> : null}
            </div>

            {   total.edit ? 
                        <button className="btn btn-light" onClick={handleSubmit}>Actualizar</button>
                        :
                        <button className="btn btn-light" onClick={handleSubmit}>Crear cita</button>
            }
        </form>
    )
}

export default Form