import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);
let loggedOut = async () => {
  try {
    await auth.signOut();
    console.log("i am motherfucking logged out");
  } catch (err) {
    error.value = err.message;
  }
};
let useLogout = () => {
  return { error, loggedOut };
};
export default useLogout;
