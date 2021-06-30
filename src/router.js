import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
// import Article from './components/Article.vue'
Vue.use(Router);

export const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/mentionlg',
      name: 'mentionlg',
      component: () => import('./components/MentionLG.vue')
    },
    {
      path: '/forgot-password',
      name: 'FortgotPassword',
      component: () => import('./views/ForgotPassword.vue')
    },
    {
      path: '/reset-password/:token',
      name: 'ResetPassword',
      component: () => import('./views/ResetPassword.vue')
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profil',
      name: 'profil',
      // lazy-loaded
      component: () => import('./views/Profil.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("./components/ArticlesList")
    },
    {
      path: "/articles/:id",
      name: "article",
      component: () => import("./components/Article")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddArticle"),
    },
    {
      path: "/panier",
      name: "Panier",
      component: () => import("./components/Panier")
    },
  ]
});

// router.beforeEach((to, from, next) => {
//     const publicPages = ["/login", "/register", "/home","/articles","/forgot-password","/email-activate","/mentionlg","/panier"];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem("user");


    // trying to access a restricted page + not logged in
    // redirect to login page
//     if (authRequired && !loggedIn) {
//         next("/login");
//     } else {
//         next();
//     }
// });