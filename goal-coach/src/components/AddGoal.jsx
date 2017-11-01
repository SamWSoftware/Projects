import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal() {
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title});
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Add a goal"
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({title: event.target.value})}
                    />
                    <button 
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addGoal()}
                    >Submit</button>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddGoal);