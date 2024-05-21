import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getDiscussions = () => {
    const discussions = ref([])
    const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('forum-replies').get()

      discussions.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }
  return { discussions, error, load }
};

export default getDiscussions;