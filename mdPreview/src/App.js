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
    };
  }
  
  changeOutput(input) {
    this.setState({
      intext: input,
      outtext: marked(input),
    });
  }
  
  uploadFile(input) {
    console.log('got the text', input);
    this.setState({
      intext: input,
      outtext: marked(input),
    });
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
      upload={this.uploadFile.bind(this)}
      outtext={this.state.outtext}
      />
      </div>
    );
  }
}

export default App;
