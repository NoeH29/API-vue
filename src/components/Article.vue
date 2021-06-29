<template>
<div class="container">
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentTutorial.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "Article",
  data() {
    return {
      currentArticle: null,
      message: ''
    };
  },
  methods: {
    getArticle(id) {
      console.log(id);
      ArticleDataService.get(id)
        .then(response => {
          this.currentArticle = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      let data = {
        id: this.currentArticle.id,
        title: this.currentArticle.title,
        description: this.currentArticle.description,
        total_vendu: this.currentArticle.total_vendu,
        price: this.currentArticle.price,
        comments: this.currentArticle.comments,
        catégorie: this.currentArticle.catégorie,
        imageUrl: this.currentArticle.imageUrl,
        published: status
      };

      ArticleDataService.update(this.currentArticle.id, data)
        .then(response => {
          this.currentArticle.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateArticle() {
      ArticleDataService.update(this.currentArticle.id, this.currentArticle)
        .then(response => {
          console.log(response.data);
          this.message = 'The article was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteArticle() {
      ArticleDataService.delete(this.currentArticle.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "articles" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getArticle(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
}

</style>
