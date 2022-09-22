import React from "react";

export default class Input extends React.Component{

    evaluar(){
        document.getElementById("input").addEventListener("keyup", (e)=>{
            let value = e.target.value;
            if(value === "perro"){
                e.target.style.border = "3px solid yellow";
                document.getElementById("result").innerHTML=`<span id="check">✔</span>`;
            }
            else{
                e.target.style.border = "3px solid red";
                document.getElementById("result").innerHTML=`<span id="cross">✘</span>`;
            }
        });
    }

    render(){
        return (
        <section class="block">
        <h3>Prueba input: escribir palabra "perro"</h3>
        <input id="input" type="text" placeholder="ingrese la palabra perro"/>
        <span id="result"></span>
        </section>)
    }
}