import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {incrementCounter,setCounterValue} from '../../actions/counter.action';

import PropTypes from 'prop-types';

class CounterComponent extends Component{
    
    componentDidMount() {
        this.interval = setInterval(this.props.incrementCounter,1000);
    }


    render() {
        return (
            <h3>{this.props.time}</h3>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.props.setCounterValue(0);
    }
}

CounterComponent.propTypes = {
    time: PropTypes.number
}


const mapStateToProps = ({Counter}) => (
    {
        time: Counter.time
    }
)

const mapActionsToProps = dispatch => (
    bindActionCreators({incrementCounter , setCounterValue},dispatch)    
)

export default connect(mapStateToProps,mapActionsToProps)(CounterComponent);