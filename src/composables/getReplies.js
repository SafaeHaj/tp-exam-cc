import { ref } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getReplies = () => {
  const replies = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('forum-replies').get()

      replies.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { replies: replies, error, load }
};

export default getReplies;