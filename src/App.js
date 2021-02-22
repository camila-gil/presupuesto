import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarNuevoGasto] = useState({})
  const [hayGasto, cambiarHayGasto] = useState(false)


  // useEffect para los gastos y el restante
  useEffect(() => {
    // guardar gasto
    if(hayGasto){
      guardarGastos([
        ...gastos,
        gasto
      ])
    }

    // resetear hay gasto
    cambiarHayGasto(false)

    // restar del presupuesto
    const presupuestoRestante = restante - gasto.cantidad
    guardarRestante(presupuestoRestante)




  }, [gasto])



  // Preguntas useEffect: por qué no se puede hacer solo con el state? por qué el del gasto también va en effect, por qué se ven los simbolos de pesos vacíos?
  return (
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">

            {mostrarPregunta ? 
              (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
            ) : (
            <div className="row">
              <div className="one-half column">
                  <Formulario 
                    guardarNuevoGasto={guardarNuevoGasto}
                    cambiarHayGasto = {cambiarHayGasto}
                  />
              </div>
              <div className="one-half column">
                  <Listado 
                    gastos = {gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
              </div>
            </div>
            )}
            


          </div>
        </header>

      </div>
  );
}

export default App;
