import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl 
                        className="deadline-input"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        placeholder="new date"
                    />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;