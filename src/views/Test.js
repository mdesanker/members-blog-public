import ContentContainer from "../components/elements/ContentContainer";
import { useDispatch, useSelector } from "react-redux";
// import { createUser, loginUser } from "../store/slices/authSlice";
import { removeAlert, timedError } from "../store/slices/alertSlice";
import Alert from "../components/elements/Alert";

const Test = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // dispatch(createUser({ username: "greg", password: "password" }));
    // dispatch(loginUser({ username: "michael", password: "password" }));
    dispatch(
      timedError({
        msg: "Passwords do not match",
        alertType: "red",
      })
    );
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
