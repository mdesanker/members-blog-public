import ContentContainer from "../components/elements/ContentContainer";
import { useDispatch, useSelector } from "react-redux";
// import { createUser, loginUser } from "../store/slices/authSlice";
import { removeAlert, timedError } from "../store/slices/alertSlice";
import Alert from "../components/elements/Alert";
import { fetchUserByToken } from "../store/slices/userSlice";

const Test = () => {
  const dispatch = useDispatch();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYTI2YzdhYThmYmMzNTc4ZjJhZWVjIn0sImlhdCI6MTY0MjAwOTgyOCwiZXhwIjoxNjQyMDI3ODI4fQ.dsG_RytoaDHEo3-Kui3AZioZZJvwB0kmj3HYo09UunM";

  const clickHandler = () => {
    dispatch(fetchUserByToken({ token }));
  };

  const removeHandler = () => {
    dispatch(removeAlert("1"));
  };

  const alerts = useSelector((state) => state.alerts);

  return (
    <main>
      <ContentContainer>
        {alerts.length > 0 &&
          alerts.map((alert) => {
            return (
              <Alert key={alert.id} text={alert.msg} color={alert.alertType} />
            );
          })}
        <button onClick={clickHandler}>Click Me!</button>
        <button onClick={removeHandler}>Remove</button>
      </ContentContainer>
    </main>
  );
};

export default Test;
