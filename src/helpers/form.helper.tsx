// buscar si un value esta lleno con 'Requerido'
export const isEmpty = (obj: {}): boolean => {
    let valid = true
    for (const _key of Object.values(obj)) {
        if (_key !== '') {
            valid = false
            break
        }

    }

    return valid;
}

// validacion generica
export const validar = (obj: {}): {} => {
    let errors = obj;
    Object.entries(obj).map(([key, value]) => {
        errors = !value
            ? { ...errors, [key]: 'Requerido' }
            : { ...errors, [key]: '' };
    })
    return errors
}