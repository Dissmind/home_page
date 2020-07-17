import React from "react";

import './CategoryBook.css'
import CategoryItem from "./CategortyItem/CategoryItem";

const CategoryBook = props => {

    return (
        <div className='CategoryBook'>
            <div className="listButton">
                {
                    props.category.map(el => <CategoryItem title={el} />)
                }
            </div>
        </div>
    )
}

export default CategoryBook
