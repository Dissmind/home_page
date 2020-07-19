import React, {Component} from 'react'

import './Layout.css'
import Menu from "../WelcomeModule/Components/Menu/Menu";


export default class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuToggle: false
        }
    }

    menuToggle = () => {
        this.setState({menuToggle: !this.state.menuToggle})
    }

    render() {
        return (
            <div className='Layout'>
                {
                    this.state.menuToggle ? <Menu menuToggle={this.menuToggle} /> : null
                }

                <header>
                    <div className='name'>Dissmind</div>
                    <nav></nav>
                </header>

                <main>
                    {
                        this.props.children
                    }
                </main>

                <footer>
                    <span
                        className='MenuButton'
                        onClick={this.menuToggle}
                    >[+]</span>
                </footer>
            </div>
        )
    }
}
