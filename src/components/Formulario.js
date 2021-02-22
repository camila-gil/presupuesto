import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error'

const Formulario = ({guardarNuevoGasto, cambiarHayGasto}) => {

    // states
    const [nombre, guardarNombre ] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() == ''){
            guardarError(true)
            return
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre,  
            cantidad,
            id: shortid.generate()
        }

    
        // pasar el gasto al componente ppal
        guardarNuevoGasto(gasto);
        cambiarHayGasto(true)

        // resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }   

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Gasto incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
            />
        </form>

    );
}

Formulario.propTypes = {
    guardarNuevoGasto: PropTypes.func.isRequired,
    cambiarHayGasto: PropTypes.func.isRequired
}
 
export default Formulario;