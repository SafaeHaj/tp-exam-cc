import {projectAuthentication } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName, photoURL) => {
    error.value = null
    try {
        const response = await projectAuthentication.createUserWithEmailAndPassword(email, password)

        if(!response)
            throw new Error('Could not signup')
        console.log(response.user)
        
        await response.user.updateProfile({displayName: displayName, photoURL: photoURL})
        const userdata = { displayName: displayName, photoURL: photoURL};
        projectFirestore.collection('forum-users', response.user.uid).add(userdata);
        error.value = null
        return response.message
    } catch (err) {
        console.log(err)
        error.value = err.message
    }
}

const registerUser = () => {
    return {error, signup}
}

export default registerUser