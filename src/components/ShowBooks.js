import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowBook from './ShowBook'

class ShowBooks extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res => {
                this.setState({
                    books: res.data
                })
            })
            .catch(err => {
                console.log('Error: ShowBooks' + err)
            })
    }

    render() {
        const books = this.state.books;
        let booksList

        if(!books) {
            booksList = 'There are no books.'
        } else {
            booksList = books.map((book, k) => 
            <ShowBook book={book} key={k}/>
            )
        }

        return (
            <div className='showBookList'>
                <div className='container'>
                    
                    <div className='row'>
                        <div className='col-md-12'>
                            <br />
                            <h2 className='display-4 text-center'>Books List</h2>
                        </div>

                        <div className='col-md-11'>
                            <Link to='/create-book' className='btn  btn-outline-warning float-right'>
                                Add a new book
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>
                    </div>

                    <div className='list'>
                        {booksList}
                    </div>

                </div>
            </div>
        )
    }
}

export default ShowBooks;