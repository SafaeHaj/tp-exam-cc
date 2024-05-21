<template>
  <div class="home-view">
    <div class="welcome-section">
      <h2>Welcome to Our Website</h2>
      <p>Thank you for visiting! We strive to provide you with the best experience.</p>
    </div>
    <div class="features">
      <div class="feature">
        <i class="fas fa-check-circle"></i>
        <p>Intuitive User Interface</p>
      </div>
      <div class="feature">
        <i class="fas fa-clock"></i>
        <p>Available 24/7</p>
      </div>
      <div class="feature">
        <i class="fas fa-users"></i>
        <p>Supportive Community</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.home-view {
  text-align: center;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  color: #333;
  background: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome-section {
  background: rgba(255, 255, 255, 0.8); /* Adding a background for better readability */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.welcome-section h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.welcome-section p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.features {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.feature {
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.8); /* Adding a background for better readability */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-10px); /* Adding a hover effect */
}

.feature i {
  font-size: 3rem;
  color: #4CAF50;
  transition: color 0.3s ease;
}

.feature:hover i {
  color: #388E3C; /* Darker shade on hover */
}

.feature p {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
}
</style>
