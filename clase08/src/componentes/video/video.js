import React from "react";
import './video.css';
export default class Video extends React.Component {

    //Params:

    constructor(props) {
        super()
        this.url = props.url;
        this.titulo = props.titulo;
        this.width = props.width;
        this.height = props.height;
        this.css_class = props.css_class;
    }

    render() {

        return (
            <section className="block">
                <h3>Elemento video</h3>
                <div className="contenedor">
                    <h4>{this.titulo}</h4>
                    <video controls>
                        <source src={this.url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>)
    }


}