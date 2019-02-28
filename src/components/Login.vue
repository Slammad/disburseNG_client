<template>
   <div class="az-signin-wrapper">
      <div class="az-card-signin">
       
        <div class="az-signin-header">
           <h1 class="az-logo">Disburse<span style="color:green">NG</span></h1>
          <br>
          <h4>Please sign in to continue</h4>
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter your email" >
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter your password">
            </div><!-- form-group -->
            <button  type="submit" class="btn btn-az-primary btn-block">Sign In</button>
          </form>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <router-link to="signup">Create an Account</router-link></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
</template>
<script>
export default {
  name: "Login",
  methods: {
    handleLogin(){
       this.$Progress.start()
    }
  },
 
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
a:hover{
	color: green;
}
</style>
