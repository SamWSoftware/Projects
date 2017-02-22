import React, { Component } from 'react';
import './App.css';

import Editor from './components/Editor';
import Display from './components/Display';

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});


class App extends Component {
  constructor() {
    super();
    this.state ={
      intext: `## Markdown editor 
this is **Bold** text and this is _italics_`,
      outtext: marked(`## Markdown editor 
this is **Bold** text and this is _italics_`),
    }
  }
  
  changeOutput(input) {
    this.setState({
      intext: input,
      outtext: marked(input),
    });
  }
  
  uploadFile(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    
    let files = evt.dataTransfer.files,
      i, f;
    for (i = 0; i<files.length; i+=1){
      f = files[i];
      if (f.name.slice(-3) === '.md'){
        this.setState({
          input: FileReader.readAsText(f),
          output: marked(FileReader.readAsText(f)),
        });
        return;
      }
    }
  }
  
  render() {
    return (
      <div className="App">
      <h2>Sam's MarkDown Previewer</h2>
      <Editor 
        changeOutput={this.changeOutput.bind(this)} 
        intext={this.state.intext}
        />
      <Display 
      outtext={this.state.outtext}
      uploadFile={this.uploadFile.bind(this)}
      />
      </div>
    );
  }
}

export default App;
