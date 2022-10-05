import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(getAuth(), "hochphilipp@web.de", "test123");
};
