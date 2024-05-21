import { ref } from 'vue'
import { projectAuthentication} from "@/firebase/config"

const user = ref(projectAuthentication.currentUser)

projectAuthentication.onAuthStateChanged(_user => {
  console.log('User state change. Current user is:', _user)
  user.value = _user
});

const getUser = () => {
  return user.value
}

export default getUser