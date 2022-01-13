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
import { loginUser } from "../../store/slices/userSlice";
import Alert from "../elements/Alert";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

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
    console.log(formData);
    dispatch(loginUser(formData));
  };

  const alerts = useSelector((state) => state.alerts);
  console.log(alerts);

  return (
    <LoginWrapper>
      <Container>
        {alerts.length > 0 &&
          alerts.map((alert) => {
            return <Alert key={alert.id} text={alert.msg} color="red" />;
          })}
        <Card>
          <Title>Log In</Title>
          <FormDescription>
            <i className="fas fa-user" />
            Sign in to your account
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
            <BasicBtn type="submit" text="Log In" />
          </Form>
          <FormSmallText>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </FormSmallText>
        </Card>
      </Container>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.main``;

const Container = styled(ContentContainer)`
  padding-top: 20vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  & input {
    font-size: 1rem;
    padding: 5px;
  }
`;

export default Login;
