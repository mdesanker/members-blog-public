import { Fragment, useEffect } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import store from "./store/store";
import { loadUser } from "./store/slices/userSlice";
import PrivateRoute from "./routing/PrivateRoute";
import Post from "./components/post/Post";

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
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/post/:id"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
