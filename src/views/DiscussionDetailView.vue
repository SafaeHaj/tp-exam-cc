<template>
  <div class="discussion-detail-container">
    <h2> {{ author }}</h2>
    <h2> {{ title }}</h2>
    <p> {{ content }}</p>
  </div>
  <ReplyForm/>
  
  <ReplyList/>
</template>

<script>

import getReplies from '@/composables/getReplies';
import getDiscussion from '@/composables/getDiscussion';
import ReplyForm from '@/components/ReplyForm';

import ReplyList from '@/components/ReplyList';


export default {
  props: {
    reply: {
      type: Object,
      required: true
    }
  },
  components:{
    ReplyForm,
    ReplyList, 
  }, 
  data() {
    return {
      author: '',
      title: '',
      content: ''
    };
  },
  computed: {
    discussionId() {
      return this.$route.params.id; 
    }
  },
  async created() {
    try {
      const {discussion, error, load }  = getDiscussion(this.discussionId);
      await load(); 
      console.log("discussion:", discussion.value);
      this.author = discussion.value.author;
      this.title = discussion.value.title;
      this.content = discussion.value.content;
      this.userJoinedDate = new Date(discussion.value.createdAt).toLocaleDateString();

      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
.discussion-detail-container {
  width: 60%; 
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center; /* Add this line */
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Add this line */
  margin-bottom: 10px;
  color: #333;
}
.discussion-detail-container p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* Reply Form CSS */
.reply-form {
  max-width: 600px;
  margin: 20px auto;
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
