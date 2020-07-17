import React from "react";

import './CategoryItem.css'

const CategoryItem = props => {

    let categorySelect = (title) => {
        alert(title)
    }

    return (
        <div className='CategoryItem'>
            <div
                className="button"
                onClick={categorySelect.bind(this, props.title)}
            >{props.title}</div>
        </div>
    )
}

export default CategoryItem
