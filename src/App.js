import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <div>Hello, world!</div>
    </Fragment>
  );
};

export default App;
