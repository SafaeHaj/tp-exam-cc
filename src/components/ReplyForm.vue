<template>
  <div class="reply-form">
      <h3>Reply to Discussion</h3>
      <form @submit.prevent="submitReply">
          <div class="form-group">
              <label for="reply-content">Your Reply:</label>
              <textarea class="form-control" id="reply-content" v-model="replyContent" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit Reply</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
  props: {
      discussionId: {
          type: String,
          required: true
      }
  },
  setup(props) {
      const replyContent = ref('');

      const submitReply = async () => {
          try {
              const db = getFirestore();
              await addDoc(collection(db, 'replies'), {
                  discussionId: props.discussionId,
                  content: replyContent.value,
                  createdAt: new Date()
              });
              replyContent.value = '';
              console.log('Reply submitted successfully!');
          } catch (error) {
              console.error('Error submitting reply:', error);
          }
      };

      return { replyContent, submitReply };
  }
};
</script>

<style scoped>
.reply-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
