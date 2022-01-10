import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <div>Hello, world!</div>
      <Footer />
    </Fragment>
  );
};

export default App;
