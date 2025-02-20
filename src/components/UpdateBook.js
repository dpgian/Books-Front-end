import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class UpdateBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            isbn: '',
            author: '',
            description: '',
            published_date: '',
            publisher: '',
            cover: ''
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:8080/api/books/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    isbn: res.data.isbn,
                    author: res.data.author,
                    description: res.data.description,
                    published_date: res.data.published_date,
                    publisher: res.data.publisher,
                    cover: res.data.cover
                })
            })
            .catch(err => {
                console.log('Error: UpdateBook')
            })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
            .put('http://localhost:8080/api/books/' + this.props.match.params.id, data)
            .then(res => { 
                this.props.history.push('/book-info/' + this.props.match.params.id)
            })
            .catch(err => {
                console.log('Error: UpdateBook => onSubmit')
            })
    }

    render() {
        return (
          <div className="UpdateBookInfo">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <Link to="/" className="btn btn-outline-warning float-left">
                      Show Book List
                  </Link>
                </div>
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Edit Book</h1>
                  <p className="lead text-center">
                      Update Book's Info
                  </p>
                </div>
              </div>
    
              <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <label htmlFor="title">Title</label>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />
    
                <div className='form-group'>
                <label htmlFor="isbn">ISBN</label>
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
                <label htmlFor="author">Author</label>
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
                <label htmlFor="description">Description</label>
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
    
                <div className='form-group'>
                <label htmlFor="published_date">Published Date</label>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                <label htmlFor="publisher">Publisher</label>
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                <label htmlFor="cover">Cover</label>
                  <input
                    type='text'
                    placeholder='Cover of this Book'
                    name='cover'
                    className='form-control'
                    value={this.state.cover}
                    onChange={this.onChange}
                  />
                </div>
    
                <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
                </form>
              </div>
    
            </div>
          </div>
        );
      }

}

export default UpdateBook