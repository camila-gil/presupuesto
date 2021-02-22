import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

const Pregunta = ( {guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // Definir los states
    const [cantidadP, guardarCantidadP] = useState(0);
    const [error, guardarError] = useState(false)
 
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if(cantidadP < 1 || isNaN(cantidadP)){
            guardarError(true)
            return;
        }

        // si se pasa la validación
        guardarError(false);

        // guardar Presupuesto y restante
        guardarPresupuesto(cantidadP)
        guardarRestante(cantidadP)

        // actualizar pregunta
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

           {error ? <Error mensaje="El presupuesto no es válido"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    name="presupuesto"
                    onChange={e => guardarCantidadP(parseInt(e.target.value, 10))} //cambiar el state
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired
}

 
export default Pregunta;