import { Redirect } from "react-router-dom";
import { useAppDispatch } from "../store/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/userSlice";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();
  const handleLogout = async function (e: any) {
    e.preventDefault();
    try {
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  return isAuth ? (
    <div>
      <h1>Welcome</h1>

      <button onClick={handleLogout}>Log out from {email}</button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;
