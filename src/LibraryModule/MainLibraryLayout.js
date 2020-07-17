import React, {Component} from 'react'

import CategoryBook from "./Components/CategoryBook/CategoryBook";
import BookList from "./Components/BookList/BookList";

import './MainLibraryLayout.css'

export default class MainLibraryLayout extends Component {

    // TODO: Use redux
    state = {
        isCategorySelected: false,

        actualBooks: [
            {
                title: 'Test title',
                authors: 'Test authors',
                imgURL: 'https://cdn.shopify.com/s/files/1/2177/5447/products/Fitz-Porsche-Ultimate-Series_1024x1024.jpg?v=1570630108',
                shortDescription: 'Test desc'
            }
        ]
    }

    categorySelect = (category) => {
        this.state.isCategorySelected = true
    }

    getCategories = () => {
        return ['C++', 'C#', 'JavaScript']
    }

    render() {
        return (
            <div className='MainLibraryLayout'>
                <main>
                    {/*{*/}
                    {/*    (this.state.isCategorySelected)*/}
                    {/*        ?*/}
                    {/*        <BookList actualBooks={this.state.actualBooks} />*/}
                    {/*        :*/}
                    {/*        <CategoryBook category={this.getCategories()} />*/}
                    {/*}*/}

                    <BookList actualBooks={this.state.actualBooks} />
                </main>
            </div>
        )
    }
}
