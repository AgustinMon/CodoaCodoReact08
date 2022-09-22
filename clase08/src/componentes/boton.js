import React from "react";

export default class Button extends React.Component{
    //Params:
    //Text: cadena de texto con formato string
    //Clase: cadena de texto con estilo del css o de bootstrap

    constructor(props){
        super();
        this.text = props.texto;
        this.clase = props.css_clase;
    }

    render() {
        return (
        <section class="block">
        <h3>Elemento Boton</h3>
        <Button className="${this.clase}">${this.text}</Button>
        </section>);
    }

}  
