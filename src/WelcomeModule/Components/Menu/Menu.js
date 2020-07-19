import React, {Component} from 'react'

import './Menu.css'

import {Link, NavLink} from "react-router-dom";


export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>


                <Link
                    to='/'
                    onClick={this.props.menuToggle} // TODO: to wrap up in HOC
                >Home</Link>

                <br/>

                <Link
                    to='/library'
                    onClick={this.props.menuToggle} // TODO: to wrap up in HOC
                >Library</Link>
            </div>
        )
    }
}
