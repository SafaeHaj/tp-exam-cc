<template>
  <div class="discussion-item list-group-item">
    <h2 class="discussion-title">{{ discussion.title }}</h2>
    <p class="discussion-author">By: {{ author }}</p>
    <p class="discussion-preview">{{ getDiscussionPreview(discussion.content) }}</p>
    <!-- <p class="discussion-date"> published {{ formatCreatedAt(discussion.formatCreatedAt) }}</p> -->
    <router-link :to="'/discussion/' + discussion.id" class="btn btn-primary">View Discussion</router-link>
  </div>
</template>


<script>
import getAuthor from '@/composables/getAuthor';
export default {
  data() {
    return {
      author: ''
    }
  },
  props: {
    discussion: {
      type: Object,
      required: true
    }
  },
  methods: {
    getDiscussionPreview(content) {
      return content.slice(0, 100) + (content.length > 100 ? '...' : '');
    }
  },
  async created() {
    try {
      const { author, error, load } = getAuthor(this.discussion.authorID);
      await load();
      console.log("author: ", author.value.displayName);
      this.author = author.value.displayName;
      console.log(error);
    }
    catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
.discussion-item {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.discussion-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.discussion-author {
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
