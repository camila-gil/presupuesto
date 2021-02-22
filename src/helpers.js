export const revisarPresupuesto = (presupuesto, restante) => {
    
    let clase;

    if((restante/presupuesto)*100 > 75){
        clase = "alert alert-success"
    } else if ((restante/presupuesto)*100 < 75 && (restante/presupuesto)*100 > 25 ){
         clase = "alert alert-warning"
    } else if ((restante/presupuesto)*100 < 25 ) {
        clase="alert alert-danger"
    }

    return clase
}

