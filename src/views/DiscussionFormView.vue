<template>
  <div class="discussion-form">
    <h2>Create New Discussion</h2>
    <form @submit.prevent="createDiscussion">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" id="title" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="content">Content:</label>
        <textarea class="form-control" id="content" v-model="content" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Discussion</button>
    </form>
  </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config';

export default {
  data() {
    return {
      title: '',   
      content: '',
      authorID: '',
      createdAt: ''
    };
  },
  methods: {
    createDiscussion() {
      const discussionData = {
        title: this.title,
        content: this.content,
        createdAt: Date(),
        authorID: ''
      };

      projectFirestore.collection('forum-discussions').add(discussionData);
      this.title = '';
      this.content = '';
      this.$router.push({ name: 'discussions'});
    }
  }
};
</script>

<style scoped>
.discussion-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

textarea {
  height: 200px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}


</style>
