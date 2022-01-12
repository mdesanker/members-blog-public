import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicBtn from "../elements/BasicBtn";
import ContentContainer from "../elements/ContentContainer";
import Title from "../elements/Title";
import Card from "../elements/Card";
import FormSmallText from "../elements/FormSmallText";
import FormDescription from "../elements/FormDescription";
import { useDispatch, useSelector } from "react-redux";
import { setAlert, timedError } from "../../store/slices/alertSlice";
import Alert from "../elements/Alert";

const Signup = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const { username, password, password2 } = formData;

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(
        timedError({
          msg: "Passwords do not match",
          alertType: "red",
        })
      );
    } else {
      console.log(formData);
    }
  };

  const alerts = useSelector((state) => state.alerts);

  return (
    <SignupWrapper>
      <ContentContainer>
        {alerts.length > 0 &&
          alerts.map((alert) => {
            return (
              <Alert key={alert.id} text={alert.msg} color={alert.alertType} />
            );
          })}
        <Card margin="1rem">
          <Title>Sign Up</Title>
          <FormDescription>
            <i className="fas fa-user" />
            Create an account
          </FormDescription>
          <Form onSubmit={formSubmitHandler}>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={formChangeHandler}
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={formChangeHandler}
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={formChangeHandler}
                placeholder="Password"
              />
            </FormGroup>
            <BasicBtn type="submit" text="Sign Up" />
          </Form>
          <FormSmallText>
            Already have an account? <Link to="/login">Log In</Link>
          </FormSmallText>
        </Card>
      </ContentContainer>
    </SignupWrapper>
  );
};

const SignupWrapper = styled.main``;

const Container = styled(ContentContainer)`
  padding-top: 20vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;

  & input {
    font-size: 1rem;
    padding: 5px;
  }
`;

export default Signup;
