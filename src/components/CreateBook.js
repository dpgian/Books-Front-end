import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            isbn:'',
            author:'',
            description:'',
            published_date:'',
            publisher:'',
            cover: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const data = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            published_date: this.state.published_date,
            publisher: this.state.publisher,
            cover: this.state.cover
        }

        axios
            .post('http://localhost:8080/api/books', data)
            .then(res => {
                this.setState({
                    title: '',
                    isbn:'',
                    author:'',
                    description:'',
                    published_date:'',
                    publisher:'',
                    cover: ''
                })
                this.props.history.push('/')
            })
            .catch(err => {
                console.log('Error: CreateBooks'+ err)
            })
    }

    render() {
        return (
            <div className='CreateBook'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 md-auto'>
                            <br />
                            <Link to ='/' className='btn btn-outline-warning float-left'>
                                Show Book List
                            </Link>
                        </div>
                        <div className='col-md-8 md-auto'>
                            <h1 className='display-4 text-center'>Add Book</h1>
                            <p className='lead text-center'>
                                Create new book
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Book title'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='ISBN'
                                        name='isbn'
                                        className='form-control'
                                        value={this.state.isbn}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Author'
                                        name='author'
                                        className='form-control'
                                        value={this.state.author}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Book description'
                                        name='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <div className='form-group'>
                                    <input
                                        type='date'
                                        placeholder='Date published'
                                        name='published_date'
                                        className='form-control'
                                        value={this.state.published_date}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Book publisher'
                                        name='publisher'
                                        className='form-control'
                                        value={this.state.publisher}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Cover URL'
                                        name='cover'
                                        className='form-control'
                                        value={this.state.cover}
                                        onChange={this.onChange}
                                    />
                                    </div>

                                    <input
                                        type="submit"
                                        className="btn btn-outline-warning btn-block mt-4"
                                    />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBook;