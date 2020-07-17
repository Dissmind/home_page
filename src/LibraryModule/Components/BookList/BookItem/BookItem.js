import React from "react";

import './BookItem.css'

const BookItem = props => {
    return (
        <div className='BookItem'>
            <img src={props.book.imgURL} alt={'Обложка книги ' + props.book.title} width='500px' />
            <h4>Title: {props.book.title}</h4>
            <h4>Authors: {props.book.authors}</h4>
            <h4>Description: {props.book.shortDescription}</h4>
        </div>
    )
}

export default BookItem
