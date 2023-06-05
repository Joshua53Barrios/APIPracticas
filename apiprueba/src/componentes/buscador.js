import React, {Component} from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();  /*las referencias (ref) se utilizan para acceder directamente a los elementos del DOM o a los componentes montados en el árbol de elementos. */

    obtenerDatos = (e) => {
        e.preventDefault();
        console.log(this.busquedaRef.current.value);
    }   

    render(){ /*Render y return es todo lo que este contenido dentro de esta dos lineas es lo que se imprimira en el archivo*/
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'> 
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg' placeholder='Busca tu imagen. Ejemplo: Mundo'/>
                    </div>
                    <div className='form-group col-md-4'> 
                        <input type="submit" className='btn btn-lg btn-danger btn-block' value='Buscar...'/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;