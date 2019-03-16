import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './header/header'
import Register from './Register/Register';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
