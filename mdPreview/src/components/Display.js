import React from "react";
import './display.css';

export default class Display extends React.Component {

    sendFiles(evt){
        var files ;
        evt.stopPropagation();
        evt.preventDefault();
        var selectedFile = document.getElementById('files');
        files = selectedFile.files;
        if (!files.length){
            try {
                files = evt.dataTransfer.files;
            }
            catch (e) {
                alert('please select a file');
                return;
            }
        }
        var upload = this.props.upload;
        var file = files[0];
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
                var text = evt.target.result;
                console.log(text);
                upload(text);
                document.getElementById('files').value = null;
            }
        };
        reader.readAsBinaryString(file);
    }

    handleDrag(evt){
        console.log('drag over');
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }

    handleDrop(evt){
        evt.stopPropagation();
        evt.preventDefault();
        var files = evt.dataTransfer.files;
        this.sendFiles(files);
    }


    render() {
        return (
            <div id="displayScreen">
                <div id="displayTop">This is the display window</div>
                <div id="displayText" contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.outtext }}></div>
                <div id="dropZone" onDragOver={this.handleDrag.bind(this)} onDrop={this.sendFiles.bind(this)}>
                    <input type="file" id="files" name="file" />
                    <button onClick={this.sendFiles.bind(this)}>Upload File</button>
                </div>
            </div>
        );
    }
}
