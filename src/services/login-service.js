import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";
import { UserService } from "@/services/user-service";

export function loginService() {
  const userService = UserService();
  const login = async (email, password) => {
    const auth = getAuth();
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
        console.log("userService.firstName.value", userService.firstName.value);

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

  return { login, register };
}



// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import { firestore } from "../firebase/firebaseConfig";

// export function loginService() {
//   const login = async (email, password) => {
//     try {
//       const userCredential = await firebase.auth().signInWithEmailAndPassword(
//         email,
//         password
//       );
//       const user = userCredential.user;

//       const usersCollection = firestore.collection("users");
//       const querySnapshot = await usersCollection
//         .where("uid", "==", user.uid)
//         .get();

//       return {
//         success: true,
//         user,
//         userDocs: querySnapshot.docs.map((doc) => doc.data()),
//       };
//     } catch (error) {
//       return {
//         success: false,
//         errorCode: error.code,
//         errorMessage: error.message,
//       };
//     }
//   };

//   const register = async (firstName, lastName, email, password) => {
//     try {
//       const userCredential = await firebase.auth().createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       const user = userCredential.user;

//       const userData = {
//         uid: user.uid,
//         firstName,
//         lastName,
//         email,
//         status: true,
//       };

//       await firestore.collection("users").add(userData);

//       return { success: true, user };
//     } catch (error) {
//       return {
//         success: false,
//         errorCode: error.code,
//         errorMessage: error.message,
//       };
//     }
//   };

//   return { login, register };
// }
