<template>
  <div class="navbar">
    <div class="logo">MyLogo</div>
    <div class="navlinks-main">
      <router-link to="/" class="navlink">Home Page</router-link>
      <router-link to="/discussions" class="navlink">Discussions</router-link>
    </div>
    <div class="navlinks-side">
      <router-link to="/signin" class="navlink">Sign In</router-link>
      <router-link to="/profile" class="navlink">Profile</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.navlinks-main, .navlinks-side {
  display: flex;
  gap: 15px;
}

.navlink {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
}

.navlink:hover {
  color: #fff;
  background-color: #007bff;
}

@media (max-width: 768px) {
  .navlinks-main {
    display: none;
  }
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 20px;
  }
  .navlink {
    font-size: 14px;
  }
}

</style>
