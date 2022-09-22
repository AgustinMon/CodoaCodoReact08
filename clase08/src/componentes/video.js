import React from "react";

export default class Video extends React.Component{

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
            <section class="block">
                <h3>Elemento video</h3>
                <video width="${this.width}" height="${this.height}" className="${this.css_class}" controls>
                    <source src="${this.url}" type="video/mp4"/>
                        Your browser does not support the video tag.
                </video>
            </section>)
    }


}