<template>
    <div>
        <LoginForm v-if="!isSignedIn" />    
        <button v-if="!isSignedIn" @click="isSignedIn = true">Sign Up</button>
        <SignUpForm v-if="isSignedIn"/>
        <button v-if="isSignedIn" @click="isSignedIn = false">Log in</button>

</div>
</template>
<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LoginForm from '@/components/LoginForm.vue';
export default {
    components: {
        SignUpForm,
        LoginForm
    },
    data() {
        return {
            isSignedIn: false
        };
    }
};
</script>

<style scoped>
    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }
    button {
        background-color: #ff0000;
        border: none;
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        margin: 16px auto; /* Added margin property to center the button horizontally */
        padding: 8px 16px;
        display: block; /* Added display property to make the button a block element */
    }
    button:hover {
        background-color: #cc0000;
    }
    button:active {
        background-color: #aa0000;
    }
    button:focus {
        outline: none;
    }
    input:focus {
        outline-color: #ff0000;
    }
    label {
        font-size: 16px;
        margin-top: 16px;
    }

    .form {
        margin-top: 16px;
    }
    .form > * {
        margin-bottom: 16px;
    }

</style>
