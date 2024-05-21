<template>
  <form @submit.prevent="submitForm" class="login-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button  type="submit">Log In</button>
  </form>
</template>


<script>
import { ref } from 'vue';
import loginUser from '@/composables/userLogin';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const submitForm = async () => {
      try {
        await loginUser(email.value, password.value);
        this.$router.push({ path: '/profile'});
        } catch (error) {
      }
    };
    return {
      email,
      password,
      submitForm
    };
  }
}
</script>

<style scoped>
.login-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: grid;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
