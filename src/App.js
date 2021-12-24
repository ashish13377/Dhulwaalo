import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/home";
import DigitalMarketing from "./Pages/Digital-marketing";
import PaymentProcessing from "./Pages/payment-processing";
import Startup from "./Pages/startup";
import About from "./Pages/about";
import Service from "./Pages/service";
import Process from "./Pages/process";
import Team from "./Pages/team";

import Bloglist from "./Pages/bloglist";
import BlogSingle from "./Pages/blogSingle";
import Contact from "./Pages/contact";
import ScrollToTopRoute from "./ScrollToTopRoute";


import Price from "./Pages/price";
import Faq from "./Pages/faq";
import ServiceDetails from "./Pages/serviceDetails";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import BlogGridPage from "./Pages/blogGridPage";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
}
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute
            path="/digital-marketing"
            component={DigitalMarketing}
          />
          <ScrollToTopRoute
            path="/payment-processing"
            component={PaymentProcessing}
          />
          
          <ScrollToTopRoute path="/startup" component={Startup} />
          <ScrollToTopRoute path="/about" component={About} />
          <ScrollToTopRoute path="/service" component={Service} />
          <ScrollToTopRoute path="/process" component={Process} />
          <ScrollToTopRoute path="/team" component={Team} />

          <ScrollToTopRoute path="/bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/blogSingle" component={BlogSingle} />
          <ScrollToTopRoute path="/blogGridPage" component={BlogGridPage} />
          <ScrollToTopRoute path="/contact" component={Contact} />
          <ScrollToTopRoute path="/price" component={Price} />
          <ScrollToTopRoute path="/faq" component={Faq} />
          <ScrollToTopRoute path="/serviceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/signIn" component={SignIn} />
          <ScrollToTopRoute path="/signUp" component={SignUp} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );


  }
}

export default App;
