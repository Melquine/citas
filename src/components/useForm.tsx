import { useState, ChangeEvent } from 'react'
import { IFullCita, ICita } from '../interfaces/app_interface'

export const useForm = (initialState: IFullCita) => {
    const [total, setTotal] = useState<ICita>(initialState.total)

    const handleChange = ({ target }:ChangeEvent<HTMLInputElement>) => {

        setTotal({
            ...total,
            [target.name]: target.value

          })
    }

    const reset = () => {
    setTotal(initialState.total)
    }

    const update = (cita: ICita) => {
        const newCita = {...cita, edit:true}
        setTotal(newCita)
    }

    return {total, handleChange, reset, update}

}
