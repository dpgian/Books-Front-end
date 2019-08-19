import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const ShowBook = props => {
    const book  = props.book

    return (
        <div className='card-container text-center'>
            <img src={book.cover} alt=''/>
            <div className='desc'>
                <h2>
                    <Link to ={`/book-info/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
}

export default ShowBook