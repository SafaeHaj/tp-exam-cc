<template>
  <div class="reply-form">
      <h3>Reply To Discussion</h3>
      <form @submit.prevent="submitReply">
          <div class="form-group">
              <label for="reply-content">Your reply:</label>
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

.reply-form h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.reply-form form {
  margin-top: 20px;
}

.reply-form .form-group {
  margin-bottom: 20px;
}

.reply-form .form-control {
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.reply-form .form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.reply-form .btn-primary {
  margin-top: 10px;
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  transition: background-color 0.2s, border-color 0.2s;
}

.reply-form .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.reply-form .btn-primary:focus {
  background-color: #004080;
  border-color: #004080;
}

.reply-form .btn-primary:active {
  background-color: #003366;
  border-color: #003366;
}

.reply-form .btn-primary:active:focus,
.reply-form .btn-primary:active:hover {
  background-color: #00264d;
  border-color: #00264d;
}

.reply-form .btn-primary:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: not-allowed;
}

</style>
