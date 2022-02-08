import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const useSignup = (email, password) => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed up: ", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, signup };
};
