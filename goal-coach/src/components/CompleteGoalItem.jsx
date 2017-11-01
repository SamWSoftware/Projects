import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoalRef } from '../firebase';

class CompleteGoalItem extends Component {
    removeGoal() {
        // remove from completed goals
        const { serverKey } = this.props.complete;
        completedGoalRef.child(serverKey).remove();
    }

    render() {
        const { email, title } = this.props.complete;
        return (
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span style={{marginRight: '5px'}}> completed by <em>{email}</em></span>
                <span
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => this.removeGoal()} 
                >
                    X
                </span>
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

export default connect(mapStateToProps, null)(CompleteGoalItem);