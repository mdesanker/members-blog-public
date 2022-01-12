import ContentContainer from "../components/elements/ContentContainer";
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser } from "../store/slices/authSlice";

const Test = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // dispatch(createUser({ username: "greg", password: "password" }));
    dispatch(loginUser({ username: "michael", password: "password" }));
  };

  return (
    <main>
      <ContentContainer>
        <button onClick={clickHandler}>Click Me!</button>
      </ContentContainer>
    </main>
  );
};

export default Test;
