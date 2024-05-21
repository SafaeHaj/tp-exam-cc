<template>
    <div class="discussion-view">  
      <router-link to="/creatediscussion" class="btn btn-primary discussion-view__create-btn"> + </router-link>
      <DiscussionList />
    </div>
  </template>
  
  <script>
  import DiscussionList from '@/components/DiscussionList.vue';
  
  export default {
    name: 'DiscussionView',
    components: {
      DiscussionList
    }
  }
  </script>
  
  <style scoped>
  .discussion-view {
    margin: 20px;
    position: relative;
  }
  
  .discussion-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .discussion-view__create-btn {
    text-decoration: none;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;
    padding: 10px 20px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .discussion-view__create-btn:hover {
    transform: scale(1.1);
  }
  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

    .btn-primary:hover {
        background-color: #0056b3;
    }
    
    .btn-primary:active {
        background-color: #004799;
    }
  
  </style>
  