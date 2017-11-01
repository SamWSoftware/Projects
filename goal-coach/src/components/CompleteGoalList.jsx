import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completedGoalRef } from '../firebase';
import CompleteGoalItem from './CompleteGoalItem';

class CompleteGoalList extends Component {
    componentDidMount() {
        completedGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(goal => {
                const {email, title} = goal.val();
                const serverKey = goal.key;
                completeGoals.push({email, title, serverKey})
            })
            this.props.setCompleted(completeGoals);

        })
    }

    clearCompleted() {
        completedGoalRef.set([]);
    }

    render() {
        return (
            <div>
                {this.props.completeGoals.map((complete, k) => {
                    return (
                        <CompleteGoalItem key={k} complete={complete} />
                    )
                })}
                <button
                    className="btn btn-danger"
                    onClick={() => this.clearCompleted()}
                >Clear Completed</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);