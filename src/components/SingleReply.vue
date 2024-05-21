<template>
    <div class="reply-item list-group-item">
      <p class="reply-author">By: {{ reply.authorID }}</p>
      <p class="reply-preview">{{ reply.content }}</p>
      
    </div>
  </template>
  
  
  <script>

  export default {
    props: {
      reply: {
        type: Object,
        required: true
      } 
    },
    methods: {
    }
  };
  </script>
  
<style scoped>
.reply-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.reply-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.reply-author {
  font-style: italic;
  margin-bottom: 5px;
  color: #888;
}

.discussion-preview {
  color: #555;
}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
