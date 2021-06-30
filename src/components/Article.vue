<template>
  <div v-if="currentArticle" class="edit-form">
    <h4>Article</h4>
    <form>
      <div class="form-group">
        <label for="title">Titre</label>
        <input type="text" class="form-control" id="title"
          v-model="currentArticle.title"
        />
      </div>

       <div class="form-group">
        <label for="price">prix</label>
        <input type="text" class="form-control" id="price"
          v-model="currentArticle.price"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentArticle.description"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteArticle"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateArticle"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Article...</p>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";
export default {
  name: "article",
  data() {
    return {
      currentArticle: null,
      message: ''
    };
  },
  methods: {
    getArticle(id) {
      ArticleDataService.get(id)
        .then(response => {
          this.currentArticle = response.data;
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
          this.$router.push({ name: "article" });
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
  margin: auto;
}
</style>