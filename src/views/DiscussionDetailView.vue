<template>
  <div class="discussion-detail-container">
    <h2> {{ author }}</h2>
    <h2> {{ title }}</h2>
    <p> {{ content }}</p>
  </div>
<div>
  <ReplyForm/>
  
  <ReplyList/> </div>
</template>

<script>

import getReplies from '@/composables/getReplies';

import ReplyList from '@/components/ReplyList';

import ReplyForm from '@/components/ReplyForm';

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
      content: ''
    };
  },
  computed: {
    ReplyId() {
      return this.$route.params.id; 
    }
  },
  async created() {
    try {
      const {reply, error, load }  = getReplies(this.ReplyId);
      await load(); 
      console.log("reply:", reply.value);
      this.author = reply.value.author;
      this.content = reply.value.content;
      this.userJoinedDate = new Date(discussion.value.createdAt).toLocaleDateString();

      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>


</style>
