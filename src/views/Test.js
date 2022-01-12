import ContentContainer from "../components/elements/ContentContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserPost,
  fetchAllPosts,
  loginUserPost,
} from "../store/slices/authSlice";

const Test = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // dispatch(fetchAllPosts());
    // dispatch(createUserPost({ username: "greg", password: "password" }));
    dispatch(loginUserPost({ username: "mickhael", password: "password" }));
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
