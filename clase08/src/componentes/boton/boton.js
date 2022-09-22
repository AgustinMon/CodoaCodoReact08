import React from "react";

export default class Boton extends React.Component{
    //Params:
    //Text: cadena de texto con formato string
    //Clase: cadena de texto con estilo del css o de bootstrap

    render() {
        return (
        <section className="block">
        <h3>Elemento Boton con Bootstrap importado desde npm</h3>
        <button className="btn btn-danger btn-lg">Hola</button>
        </section>);
    }

}  
