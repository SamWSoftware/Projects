import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
    completeGoal() {
        // add to completed goals
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        completedGoalRef.push({email, title});
        //remove from goal ref
        goalRef.child(serverKey).remove();

    }

    render() {
        console.log(this.props);
        const { email, title } = this.props.goal;
        return (
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
                <button
                className="btn btn-sm btn-primary"
                onClick={() => this.completeGoal()} 
                >
                    Complete
                </button>
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

export default connect(mapStateToProps, null)(GoalItem);