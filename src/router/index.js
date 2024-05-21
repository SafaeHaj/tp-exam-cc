import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import SigninView from '@/views/SigninView.vue';
import DiscussionView from '@/views/DiscussionView.vue';
import DiscussionDetailView from '@/views/DiscussionDetailView.vue';
import DiscussionFormView from '@/views/DiscussionFormView.vue';


const routes = [
    { path: '/home', name: 'home', component: HomeView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/signin', name: 'signin', component: SigninView },
    { path: '/discussions', name: 'discussions', component: DiscussionView },
    { path: '/discussion/:id', name: 'discussion', component: DiscussionDetailView  },
    { path: '/creatediscussion',name: 'creatediscussion', component: DiscussionFormView }


];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
