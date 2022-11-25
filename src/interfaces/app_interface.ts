import { ChangeEvent } from 'react'

export interface ICita {
    petName: string;
    ownerName: string;
    date: string;
    time: string;
    sintomas: string;
    id: string;
    completed: boolean;
    edit: boolean;
    update: (cita: ICita) => void;
}
export interface IFields {
    petName: string;
    ownerName: string;
    date: string;
    time: string;
    sintomas: string;
}

export interface IFullCita {
    total: ICita
    handleChange?: ( target :ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
}
export interface IPropsList {
    cita: ICita
}
export interface IAdd {
    addTask(params:ICita, update:(x:ICita)=>void): void;
    editCita(params:ICita): void;
}

export interface IPropsCita {
    cita: ICita;
    deleteCita: (citaToDelete: string) => void;
    finishedCita: (task: string) => void;
}
