import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; 
import { firestore } from "../firebase/firebaseConfig"; 


export function loginService() {
  const login = async (email, password) => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const usersCollection = collection(firestore, "users");
      const q = query(usersCollection, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      return {
        success: true,
        user,
        userDocs: querySnapshot.docs.map((doc) => doc.data()),
      };
    } catch (error) {
      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };

  const register = async (firstName, lastName, email, password) => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Benutzer in Firestore speichern
      const userData = {
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        savedUsers: [],
        email: email,
        status: true,
      };

      await addDoc(collection(firestore, "users"), userData);

      return {
        success: true,
        user,
      };
    } catch (error) {
      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };

  return { login, register };
}
