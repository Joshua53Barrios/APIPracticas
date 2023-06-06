import React from "react";

const Paginacion = props => {
    return(
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button> {/*&larr significa flecha a izquierda*/}
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button> {/*&larr significa flecha a derecha*/}
        </div>

    )

}
export default Paginacion; 