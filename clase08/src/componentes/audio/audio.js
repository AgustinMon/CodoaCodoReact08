import React from "react";

export default class Audio extends React.Component{
    constructor(props){
        super();
        this.clase = props.clase;
    }

    getList(){
        let elementos = [];
        for(let l of audioList){
            elementos.push(<li>
            {l.texto}
            <audio controls>
                <source src={l.url}  type="audio/ogg"/>
            </audio>
            </li>);
        }
        return elementos;
    }

    render(){
        return (<section className="block">
        <h3>Elemento Audio viene de un objeto con {audioList.length} elementos</h3>
        <ul id="audiolist">
        {this.getList()} 
        </ul>
        </section>);
    }
}

const audioList = [
    {
        url : "../media/horse.ogv",
        texto : "audio caballo"
    },
    {
        url : "../media/horse.ogv",
        texto : "audio 2"
    },
    {
        url : "../media/horse.ogv",
        texto : "audio 3"
    }

];