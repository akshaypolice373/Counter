import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'



class CounterButton extends Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //      counter: 0
    //     // }
    //     // this.increment = this.increment.bind(this);
    // }

    // increment = () => {
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     })
    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement = () => {
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     })
    //     this.props.decrementMethod(this.props.by)
    // }
    
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div> 
        )
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number    
}

export default CounterButton
