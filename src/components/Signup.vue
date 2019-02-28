<template>
  <div class="az-signup-wrapper">
    <div class="az-column-signup-left">
      <div>
        <i class="typcn typcn-chart-bar-outline"></i>
        <h1 class="az-logo">
          Disburse
          <span style="color:green">NG</span>
        </h1>
        <h5>Register Your Business Today &amp; DisburseNG</h5>
        <p>We provide the best user experience to our clients when it comes to payment processing with less charges involved. Register your business and enjoy our service.</p>
        <p>over 100 Businesses are registered with us</p>
        <a href="index.html" class="btn btn-outline-indigo">Learn More</a>
      </div>
    </div>
    <!-- az-column-signup-left -->
    <div class="az-column-signup">
      <h1 class="az-logo">
        Disburse
        <span style="color:green">NG</span>
      </h1>
      <div class="az-signup-header">
        <h4>It's free to signup and only takes a minute.</h4>
        <div v-if="userexist" class="alert alert-success" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <strong>Oops!</strong> User Exists.
        </div>
        <form @submit.prevent="handleSignup">
          <div class="form-group">
            <label>Business Name</label>
            <input
              type="text"
              class="form-control"
              v-model="user.business"
              placeholder="Enter Business Name"
            >
          </div>
          <!-- form-group -->
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              v-model="user.email"
              placeholder="Enter your email"
            >
          </div>
          <!-- form-group -->
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              placeholder="Enter your password"
            >
          </div>
          <!-- form-group -->
          <div class="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.cpassword"
              placeholder="Enter your password"
            >
          </div>
          <!-- form-group -->
          <button class="btn btn-az-primary btn-block">Create Account</button>
        </form>
      </div>
      <!-- az-signup-header -->
      <br>
      <div class="az-signup-footer">
        <p>Already have an account?
          <router-link to="/">Sign In</router-link>
        </p>
      </div>
      <!-- az-signin-footer -->
    </div>
    <!-- az-column-signup -->
  </div>
  <!-- az-signup-wrapper -->
</template>
<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      response: "",
      userexist: false,
      user: {
        business: "",
        email: "",
        password: "",
        cpassword: ""
      }
    };
  },
  methods: {
    handleSignup() {
      try {
        this.$Progress.start();
        axios
          .post("http://localhost:3000/users/signup", {
            business: this.user.business,
            email: this.user.email,
            password: this.user.password
          })
          .then(response => {
            this.response = response.data;
            this.$Progress.finish();
          })
          .catch(error => {
            if (error.response.data.message === "User Exists") {
              this.userexist = true;
              this.$Progress.finish();
            }
            this.userexist = true;
            this.response = error.response.data.message;
          });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>

<style scoped>
.btn-outline-indigo {
  border-radius: 5px;
  border-color: green;
  color: green;
}
.btn-az-primary {
  color: #fff;
  background-color: green;
  border-color: green;
}

a:hover {
  color: green;
}
</style>
