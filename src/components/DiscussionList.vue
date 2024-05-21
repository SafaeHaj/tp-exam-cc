<template>
  <div class="discussion-container">
    <div v-for="discussion in discussions" :key="discussion.id">
      <SingleDiscussion :discussion="discussion"/>
    </div>
  </div>
</template>

<script>
import getDiscussions from '@/composables/getDiscussions';
import SingleDiscussion from '@/components/SingleDiscussion.vue';

export default {
  data() {
    return {
      discussions: []
    };
  },
  methods: {
    async getAllDiscussions() {
      try {
        const { load, discussions } = getDiscussions();
        await load();
        this.discussions = discussions.value;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getAllDiscussions();
  },
  components: {
    SingleDiscussion
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
