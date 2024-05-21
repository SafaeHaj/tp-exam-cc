import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getDiscussion = (id) => {

  const discussion  = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('forum-discussions').doc(id).get()

      if (!res.exists) {
        throw Error('Uh oh! This user does not exist!')
      }
      discussion .value = { ...res.data(), id: res.id }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { discussion: discussion , error, load } 
}

export default getDiscussion 