import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { logout };
};
