<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong>
      </h3>
      <br>
    <br>
    <p>
      <strong>Id :</strong>
      {{currentUser.id}}
    </p>
    <br>
    <p>
      <strong>Change ton mot de passe :<a href="http://localhost:8080/#/forgot-password">  ici</a></strong>
      
    </p>
    <br>
    <p>
      <strong>Email :</strong>
      {{currentUser.email}}
    </p>
    <br>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>