import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./views/Landing";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
};

export default App;
