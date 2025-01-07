import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import { UserService } from "@/services/user-service";


export function loginService(router) {
  const userService = UserService();
  const auth = getAuth();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const usersCollection = collection(firestore, "users");
      const q = query(usersCollection, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot) {
        const currentUser = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })[0]; 
        
        localStorage.setItem("firstName", currentUser.firstName);
        localStorage.setItem("lastName", currentUser.lastName);
        localStorage.setItem("userID", currentUser.id);
        userService.fetchContacts(currentUser.id);

        return {
          success: true,
          user,
          userDocs: querySnapshot.docs.map((doc) => doc.data()),
        };
      }
    } catch (error) {
      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };


  const register = async (firstName, lastName, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        savedUsers: [],
        email: email,
        status: true,
      };

      const resp = await addDoc(collection(firestore, "users"), userData);
      if (resp) {
        userService.firstName.value = firstName;
        userService.lastName.value = lastName;
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);

        return {
          success: true,
          user,
        };
      }
    } catch (error) {
      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };


  const logout = async () => {
    const currentUser = localStorage.getItem("userID");
    const userDocRef = doc(firestore, `users/${currentUser}`);
    try {
      await updateDoc(userDocRef, { status: false });

      await signOut(auth);

      localStorage.clear();
      router.push({ path: "/login" });
    } catch (error) {
      console.error("Fehler beim Logout:", error);
    }
  }

  return { login, register, logout };
}


