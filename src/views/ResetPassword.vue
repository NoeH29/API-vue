<template>

  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profil-img-card"
      />
      <form name="form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="newPassword">New Password</label>
          <input
            v-model="newPassword"
            placeholder="newPassword"
            type="newPassword"
            class="form-control"
          />
          <button class="btn btn-primary btn-block">Submit</button>
          <div
            v-if="errors.has('newPassword')"
            class="alert alert-danger"
            role="alert"
          >New password is required ! </div>
           <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>

import axios from 'axios';

export default {
    name: 'ResetPassword',
    data(){
        return {
            newPassword: '',
            resetLink: this.$route.params.token,
        }
    },
    methods: {
  handleSubmit() {
            axios.put('http://localhost:8080/auth/reset-password', {
                newPassword: this.newPassword,
                resetLink: this.resetLink,
                token: this.$route.params.token
            }).then((response) => {
              console.log(response)
            }).catch((error) => {
              console.log(error)
            }); 
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profil-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>