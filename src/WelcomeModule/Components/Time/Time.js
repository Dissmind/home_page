import React, {Component} from 'react'

import './Time.css'


export default class Time extends Component {

    constructor (props) {
        super(props)

        this.state = {
            hour: new Date().getHours(),

            minute: new Date().getMinutes(),
            seconds: new Date().getSeconds(),

            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            seconds: new Date().getSeconds(),
        });
    }

    render() {
        return (
            <div>
                <span>
                    {
                        this.state.hour + ' : ' + this.state.minute + ' : ' + this.state.seconds
                    }
                </span>
                <br/>
                <span>
                    {
                         this.state.day + '.' + this.state.month + '.' + this.state.year
                    }
                </span>
            </div>
        )
    }
}
