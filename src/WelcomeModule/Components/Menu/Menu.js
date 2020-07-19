import React, {Component} from 'react'

import './Menu.css'
import Button from "./Button/Button";
import {Link, NavLink} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <NavLink to='/library'>Link</NavLink>
                <Button title='Btn2' />

                <Button title='Btn3' />
            </div>
        )
    }
}
