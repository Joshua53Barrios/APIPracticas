import React from 'react';
import Buscador from './componentes/buscador';
import Resultado from './componentes/resultado';


class App extends React.Component {
  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','end');

  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if(pagina === 1)return null;

    pagina --;

    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;

    pagina ++;

    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=37077791-0cd4146d6d6794f99cf9b7310&q=${this.state.termino}&per_page=40&page=${pagina}` //Este es el link de la api, nos interesa hasta & en q refiere a query que hace funcion del nombre que tendremos en el buscador. 
    //console.log(url);
    /*UNA PROMESA EN java, representa la finalizacion eventual de la operación asíncrona y devuelve un resultado*/
    fetch(url) //Fetch realiza una solicitud en HTTP a la URL especificada. `
      .then(respuesta => respuesta.json()) //Se procesa la respuesta y la devuelve en formato JSON 
      .then(resultado => this.setState({ imagenes : resultado.hits }))  //Guarda en la propiedad imagenes los resultados obtenidos del metodo SetState que se establece en resultadol.hits
  }

  datosbusqueda = (termino) => { /*Esta funcion actualiza el estado del componente React con el valor del parámetro*/
    this.setState({ /*esta función actualiza el estado del componente React con el valor del parámetro termino, y luego llama a consultarApi después de que el estado se haya actualizado. CALLBACK*/
      termino : termino,
      pagina : 1
    },() => {
        this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron "> {/*Jumbotron componente de Boostrap que representa un cuadro destacado en una pagina en HTML*/}
          <p className="lead text-center">Buscador de imágenes</p> 

          <Buscador datosbusqueda={this.datosbusqueda} />
        </div>
        <div class="row">
          <div class="justify-content-center text-center">
             <Resultado
                  imagenes={this.state.imagenes}
                  paginaAnterior={this.paginaAnterior}
                  paginaSiguiente={this.paginaSiguiente}
              />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
