<template>
    <div class="signup-container">
        <form @submit.prevent="submitForm" class="signupform">
            <label for="displayName">Username</label>
            <input type="text" id="displayName" v-model="displayName" placeholder="e.g: Destiny" required>

            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="youremail@domain.com" required>

            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="8 to 10 chars" required>

            <label for="photoUrl">Upload photo</label>
            <input type="image" id="photoUrl" v-model="photoUrl">

            <button type="submit" class="centered-button">Sign Up</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import registerUser from '@/composables/addUser';


const submitForm = async () => {
    const emit = defineEmits(['customEvent']);

    const displayName = ref('');
    const email = ref('');
    const password = ref('');
    const photoURL = ref('');

    const { error, signup } = registerUser()
    await signup(email.value, password.value, displayName.value, photoURL.value)
    if (!error.value) {
        emit('signup')
    }
}
</script>

<style scoped>
.signupform {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.centered-button {
    display: inline-block;
    vertical-align: middle;
    /* This will align the button vertically */
    text-align: center;
}

.signupform label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.signupform input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.signupform input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
}

.signupform button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.signupform button:hover {
    background-color: #0056b3;
}

@media (max-width: 480px) {
    .signupform {
        padding: 15px;
    }

    .signupform input,
    .signupform button {
        font-size: 14px;
    }
}
</style>
