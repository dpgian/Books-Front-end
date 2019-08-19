import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import BookInfo from './components/BookInfo'
import CreateBook from './components/CreateBook'
import ShowBooks from './components/ShowBooks'
import UpdateBook from './components/UpdateBook'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ShowBooks} />
        <Route path='/create-book' component={CreateBook} />
        <Route path='/update-book/:id' component={UpdateBook} />
        <Route path='/book-info/:id' component={BookInfo} />
      </div>
    </Router>
  );
}

export default App;
