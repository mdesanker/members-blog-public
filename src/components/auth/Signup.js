import styled from "styled-components";
import BasicBtn from "../elements/BasicBtn";
import ContentContainer from "../elements/ContentContainer";
import Title from "../elements/Title";
import Card from "../elements/Card";

const Signup = () => {
  return (
    <SignupWrapper>
      <Container>
        <Card>
          <Title>Create an Account</Title>
          <Form>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <BasicBtn type="submit" text="Sign Up" />
          </Form>
        </Card>
      </Container>
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
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  & input {
    font-size: 1rem;
    padding: 5px;
  }
`;

export default Signup;
