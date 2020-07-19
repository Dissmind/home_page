import React, {Component} from 'react'

import './MainWelcomeModuleLayout.css'
import Time from "./Components/Time/Time";
import Menu from "./Components/Menu/Menu";
import {NavLink} from "react-router-dom";

export default class MainWelcomeModuleLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuToggle: false
        }
    }

    render() {
        return (
            <div className='MainWelcomeModuleLayout'>


                <Time />

            </div>
        )
    }
}
