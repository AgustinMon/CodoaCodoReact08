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

    getElements(){
        const x = [];

        for(let e of this.elementos){
            x.push(<li>{e}</li>);
        }

        return x;
    }

    render() {
        return (
            <section className="block">
                <h3>Elemento Lista</h3>
                <ul>
                    {this.getElements()}
                </ul></section>
        );
    }
}

