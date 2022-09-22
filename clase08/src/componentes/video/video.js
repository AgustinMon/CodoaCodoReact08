import React from "react";
import './video.css';
export default class Video extends React.Component {

    //Params:

    constructor(props) {
        super()
        this.url = props.url;
        this.width = props.width;
        this.height = props.height;
        this.css_class = props.css_class;
    }

    render() {

        return (
            <section className="block">
                <h3>Elemento video</h3>
                <div className="contenedor">
                    <video controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>)
    }


}