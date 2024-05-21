<template>
  <div class="profile-view">
    <p class="logout" @click="logout">Log Out</p>
    <div class="container">
      <div class="userphoto">
        <img :src="photoUrl" alt="User Photo" />
        <p class="name">{{ username }}</p>
      </div>

      <div class="userinfo">
        <p><strong>Email:</strong> {{ userEmail }}</p>
        <p><strong>Joined:</strong> {{ userJoinedDate }}</p>
      </div>

      <div class="participated">
        <p>Participated in {{ discussions.length }} discussions:</p>
        <div class="discussions">
          <div v-for="discussion in discussions" :key="discussion.id" class="discussion-item">
            <router-link :to="'/discussion/' + discussion.id">
              {{ discussion.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import getUser from "@/composables/getUser";
import getDiscussions from "@/composables/getDiscussions";
import { projectAuthentication } from "@/firebase/config";

export default {
  name: "ProfileView",
  data() {
    return {
      username: '',
      photoUrl: '',
      userEmail: '',
      userJoinedDate: '',
      discussions: []
    };
  },
  methods: {
    logout() {
      projectAuthentication.signOut().then(() => {
        this.$router.push('/signin');
      });
    },
    async fetchData() {
      const user = projectAuthentication.currentUser;
      if (user) {
        this.username = user.displayName;
        this.photoUrl = user.photoURL;
        this.userEmail = user.email;
        this.userJoinedDate = new Date(user.metadata.creationTime).toLocaleDateString();
        this.discussions = await getDiscussions(user.uid);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.profile-view {
  padding: 20px;
}

.logout {
  cursor: pointer;
  color: #333;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: right;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.userphoto {
  text-align: center;
}

.userphoto img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.name {
  font-size: 18px;
  color: #333;
}

.userinfo {
  margin-top: 20px;
}

.userinfo p {
  margin: 5px 0;
}

.participated {
  margin-top: 20px;
}

.participated p {
  margin-bottom: 10px;
  font-weight: bold;
}

.discussions {
  margin-top: 10px;
}

.discussion-item {
  margin-bottom: 5px;
}

.discussion-item a {
  display: block;
  color: #007bff;
  text-decoration: none;
}

.discussion-item a:hover {
  text-decoration: underline;
}
</style>
