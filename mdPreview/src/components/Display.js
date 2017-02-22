import React from "react";
import './display.css';

export default class Display extends React.Component {


    render() { 
        return (
            <div id="displayScreen">
                <div id="display-top">This is the display window</div>
                <div id="displaytext" contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.outtext }}></div>
                {/* <div id="drop_zone">Drop files here</div>  */}
            </div>
        );
    }
}