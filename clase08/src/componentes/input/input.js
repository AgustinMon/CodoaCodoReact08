import React from "react";
import './input.css';

export default class Input extends React.Component {

    evaluar() {
        document.getElementById("input").addEventListener("keyup", (e) => {
            let value = e.target.value;
            if (value === "perro") {
                e.target.style.border = "3px solid yellow";
                document.getElementById("result").innerHTML = `<span id="check">✔</span>`;
            }
            else {
                e.target.style.border = "3px solid red";
                document.getElementById("result").innerHTML = `<span id="cross">✘</span>`;
            }
        });
    }

    render() {
        return (
            <section className="block">
                <h3>Prueba input: escribir palabra "perro"</h3>
                <div className="contenedor">
                    <input id="input" type="text" placeholder="ingrese la palabra perro" onChange={this.evaluar} />
                    <span id="result"></span>
                </div>
            </section>)
    }
}