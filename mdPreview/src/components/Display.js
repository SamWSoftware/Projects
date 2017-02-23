import React from "react";
import './display.css';

export default class Display extends React.Component {
    
    
    sendFile(evt){
        console.log('got the click');
        var files = document.getElementById('files').files;
        var upload = this.props.upload;
        if (!files.length){
            alert('please select a file');
            return;
        }
        var file = files[0];
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log('loaded');
            if (evt.target.readyState === FileReader.DONE) {
                var text = evt.target.result;
                console.log(text);
                upload(text);
            }
        };
        reader.readAsBinaryString(file);
    }
    
    handleDrag(evt){
        console.log('got a drag Over');
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }


    render() { 
        return (
            <div id="displayScreen">
                <div id="display-top">This is the display window</div>
                <div id="displaytext" contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.outtext }}></div>
                <div id="drop_zone">
                    <input type="file" id="files" name="file" />
                    <button onClick={this.sendFile.bind(this)}>Upload File</button>
                </div>
            </div>
        );
    }
}