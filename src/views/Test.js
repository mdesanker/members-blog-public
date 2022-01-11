import ContentContainer from "../components/elements/ContentContainer";
import { useDispatch, useSelector } from "react-redux";
import { createUserPost, fetchAllPosts } from "../store/slices/authSlice";

const Test = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchAllPosts());
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
