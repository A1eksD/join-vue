import { ref, onUnmounted  } from "vue";
import { firestore } from '../firebase/firebaseConfig';
import { onSnapshot, doc } from "firebase/firestore";

export function UserService() {
  const firstName = ref("");
  const lastName = ref("");
  // const SortedContacts = ref([]);
  const contacts = ref([]); 
  let unsubscribe = null;


  const fetchContacts = (userID) => {
    unsubscribe = onSnapshot(doc(firestore, `users/${userID}`), (docSnapshot) => {
      console.log("onSnapshot triggered for user document");
  
      if (docSnapshot.exists()) {
          const userData = docSnapshot.data(); 
          console.log("User data:", userData);
  
          if (userData.savedUsers && Array.isArray(userData.savedUsers)) {
              contacts.value = userData.savedUsers;
          } else {
              console.log("No savedUsers found or it is not an array.");
              contacts.value = []; 
          }
      } else {
          console.log("User document does not exist.");
          contacts.value = []; 
      }
    });
  };


  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe(); // Abbestellen der Echtzeit-Überwachung
      console.log("Unsubscribed from Firestore");
    }
  });


  return {
    firstName,
    lastName,
    fetchContacts,
    contacts,
  };
}
