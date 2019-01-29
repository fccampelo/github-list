import React, { Component, Fragment } from "react";

// Routes
import Routes from "./Routes/";

// Components
import { Footer, Wrapper, Header } from "./Components/";

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, window);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          <Routes />
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
