import React, {Component} from 'react';
import Imagen from './imagen'
import Paginacion from './paginacion';


class Resultado extends Component{
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;
        return(
            <React.Fragment>
                <div className='col-12 p-5 row'> {/* las clases 'col-12', 'p-5' y 'row' son clases CSS de Bootstrap que se aplicarán al elemento para darle un diseño de columnas y márgenes específicos. */}
                    {imagenes.map(imagen =>(
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}
                        />

                    ))}
                </div>
                <Paginacion 
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>


        )
    }
    render(){ 
        return(
            <React.Fragment> {/*<React.Fragment> es un componente especial proporcionado por React que permite agrupar varios elementos hijos sin agregar un nodo adicional al DOM.*/}
                {this.mostrarImagenes()}
            </React.Fragment>
        );

    }
}

export default Resultado;