import { Fragment, useEffect } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Test from "./views/Test";
import setAuthToken from "./utils/setAuthToken";
import store from "./store/store";
import { loadUser } from "./store/slices/userSlice";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
