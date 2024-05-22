import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getAuthor = (id) => {

  const author  = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('forum-users').doc(id).get()

      if (!res.exists) {
        throw Error('Uh oh! This user does not exist!')
      }
      author.value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { author: author , error, load } 
}

export default getAuthor