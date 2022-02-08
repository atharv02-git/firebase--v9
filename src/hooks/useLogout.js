import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
// context
import { useAuthContext } from "../hooks/useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { logout };
};
