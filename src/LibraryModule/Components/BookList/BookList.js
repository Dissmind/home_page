import React from "react";

import './BookList.css'
import BookItem from "./BookItem/BookItem";

const BookList = props => {

    return (
        <div className='BookList'>
            {
                props.actualBooks.map(el => <BookItem book={el} />)
            }
        </div>
    )
}

export default BookList
