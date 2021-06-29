<template>
<div>
<h3 class="roll-in-right">Noé H Application</h3>
<div id="navbar">
    <Slide>
    <li class="nav-item">
        <router-link to="/home" class="nav-link">Home</router-link>
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

        <li class="nav-item ml-">
          <router-link to="/panier" class="nav-link ">Panier
          </router-link>
        </li>
        <li v-if="!currentUser" class="nav-item ">
          <router-link to="/register" class="nav-link">Enregistre toi
          </router-link>
        </li>
        <li v-if="!currentUser" class="nav-item">
          <router-link to="/login" class="nav-link ">Login
          </router-link>
        </li>
        <div v-if="currentUser">
        <a class="nav-item">
          <router-link to="/profil" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </a>
        <a class="nav-item">
          <a class="nav-link" href @click.prevent="logout">Logout
          </a>
        </a>
      </div>
    </Slide>
</div>
</div>

</template>

<script>
// import an animation
import { Slide } from 'vue-burger-menu'
// register the component
export default {
    name: "navbar",
  components: {
    Slide
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
.nav-link {
    color: white;
}
.roll-in-right {
  float: right;
  color: white;
  margin-right: 2%;
  -webkit-animation: roll-in-right 0.6s ease-out both;
	animation: roll-in-right 0.6s ease-out both;
}
@-webkit-keyframes roll-in-right {
  0% {
    -webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
@keyframes roll-in-right {
  0% {
    -webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}

</style>
