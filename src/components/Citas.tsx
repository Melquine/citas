import React, { useEffect, useRef, useState } from 'react';
import { IPropsList, IPropsCita } from '../interfaces/app_interface'
import './Citas.css'

const Lista = ({cita}:IPropsList): JSX.Element  => {
    return (
        <ul>
            <li>Mascota: <span style={{ textDecoration: cita.completed ? 'line-through' : 'none'}}>{cita.petName}</span></li>
            <li>Dueño: <span>{cita.ownerName}</span></li>
            <li>Fecha: <span>{cita.date}</span></li>
            <li>Hora: <span>{cita.time}</span></li>
            <li>Sintomas: <span>{cita.sintomas}</span></li>
        </ul>     
    )
}

const Citas = ({ cita, deleteCita, finishedCita }: IPropsCita): JSX.Element => {

    return (
        <div className="cita" style={{ backgroundColor: cita.completed ? 'rgba(123,216,96,1)' : 'gainsboro'}}>
            <Lista cita={cita} />
            <div className="actions">
                <button className="btn btn-light" disabled={cita.completed} onClick={() => cita.update(cita)}>Edit</button>
                <button className="btn btn-light" disabled={cita.completed} onClick={() => finishedCita(cita.id)}>Done</button>
                <button className="btn btn-danger" onClick={() => deleteCita(cita.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Citas