import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./header/header";
import Register from "./Register/Register";
import Home from "./Home/Home";
import MenProducts from "./MenProducts/MenProducts";
import WomenProducts from "./WomenProducts/WomenProducts";
import ProductDetail from "./ProductDetail/ProductDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/menproducts" component={MenProducts} />
          <Route path="/womenproducts" component={WomenProducts} />
          <Route path="/productdetail" component={ProductDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
