<template>
  <div class="discussion-container">
    <div v-for="reply in replies" :key="reply.id">
      <Singlereply :reply="reply" />
    </div>

  </div>
</template>

<script>
import getReplies from '@/composables/getReplies';
import SingleReply from '@/components/SingleReply.vue';

export default {
  data() {
    return {
      replies: []
    };
  },
  methods: {
    async getAllReplies() {
      try {
        const { load, replies } = getReplies();
        await load();
        this.replies = replies.value;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getAllReplies();
  },
  components: {
    SingleReply
  }
}
</script>


<style scoped>
.discussion-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
