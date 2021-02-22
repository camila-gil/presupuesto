import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => (  
    <div className="gastos-realizados">
        <h2>Listado</h2>
        <ul>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </ul>
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

 
export default Listado;