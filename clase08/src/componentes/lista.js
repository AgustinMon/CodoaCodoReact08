import React from "react";

export default class Lista extends React.Component{
    // Params:
    // elementos[]: elementos de la lista
    // clase: clase boostrap

    constructor(props) {
        super()
        this.elementos = props.elementos;
        this.clase = props.clase;
    }

    render() {
        return (
            <section class="block">
                <h3>Elemento Lista</h3>
                <ul>
                </ul></section>
        );
    }
}

