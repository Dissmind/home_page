import React from "react";

import './Layout.css'

const Layout = props => {

    return (
        <div className='Layout'>
            <header>
                <div className='name'>Dissmind</div>
                <nav></nav>
            </header>

            <main>
                {
                    props.children
                }
            </main>
        </div>
    )
}

export default Layout
