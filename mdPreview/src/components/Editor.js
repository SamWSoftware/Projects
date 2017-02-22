import React from "react";
import './editor.css';

export default class Editor extends React.Component {
    changeOutput(e){
        let text = e.target.value;
        this.props.changeOutput(text);
    }
    render() {
        return (
            <div id="editorscreen">
                <div id="edit-top">This is the editor window</div>
                <textarea 
                    id="edit" 
                    onChange={this.changeOutput.bind(this)} 
                    value={this.props.intext} 
                />
            </div>
        );
    }
}