<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Recherche
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Articles Liste :</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(article, index) in articles"
          :key="index"
          @click="setActiveArticle(article, index)"
        >
          {{ article.title }}
        </li>
      </ul>

      <button v-if="ShowButton" class="m-3 btn btn-sm btn-danger" @click="removeAllArticles">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentArticle">
        <h4>Article</h4>
        <div>
          <label><strong>Titre :</strong></label> {{ currentArticle.title }}
        </div>
        <div>
          <label><strong>Description :</strong></label> {{ currentArticle.description }}
        </div>
        <div>
          <label><strong>Prix :</strong></label> {{ currentArticle.price }}
        </div>
        <!-- <div>
          <label><strong>Status:</strong></label> {{ currentArticle.published ? "Published" : "Pending" }}
        </div> -->
        <div v-if="ShowButton">
        <router-link :to="'/articles/' + currentArticle.id" class="badge badge-warning">Edit</router-link>
        </div>
        <button v-on:click="addToPanier(currentArticle)">Ajouter au panier</button>
        </div>
      
      <div v-else>
        <br />
        <p>clic sur l'article...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "articles-list",
  data() {
    return {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
      title: ""
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    ShowButton() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    }
  },
  methods: {
    retrieveArticles() {
      ArticleDataService.getAll()
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    addToPanier: function (article) {
      // console.Log(articles);
  this.$store.dispatch("pushToPanier", article);
  },

    refreshList() {
      this.retrieveArticles();
      this.currentArticle = null;
      this.currentIndex = -1;
    },

    setActiveArticle(article, index) {
      this.currentArticle = article;
      this.currentIndex = index;
    },

    removeAllArticles() {
      ArticleDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      ArticleDataService.findByTitle(this.title)
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveArticles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
  margin-top: 10px;
}
.list-group-item {
  margin: 5% 0;
}

</style>
