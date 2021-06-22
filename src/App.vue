<template>
  <div id="app">

    <nav class="navbar navbar-expand navbar-light" style="background-color: #e3f2fd;">
      <a href class="navbar-brand" @click.prevent>Noe H Application</a>
      <div class="navbar-nav mr-auto uppercase font-semibold ">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/articles" class="nav-link">Article</router-link>
        </li>
        <li v-if="showAddArticle" class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      


      <div class="navbar-nav ml-auto">
        <li class="nav-item ml-">
          <router-link to="/panier" class="nav-link ">
            <font-awesome-icon icon="sign-in-alt" />Panier
          </router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item ">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Enregistre toi
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link ">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profil" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt" />Logout
          </a>
        </li>
      </div>
    </nav>

    
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>

</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showAddArticle() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
html {
  background-color: bisque;
  height: 100%;
  width: 100%;
}
#app{
  background-color: bisque;
  height: 100%;
    width: 100%;
    margin: 0;
    display: table;
}
.container {
  background-color: bisque;
  height: 100%;
}

</style>
