<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="article.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="article.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="price">price</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="article.price"
          name="price"
        />
      </div>

      <div class="form-group">
        <label for="imageUrl">imageUrl</label>
        <input
          class="form-control"
          id="imageUrl"
          required
          v-model="article.imageUrl"
          name="imageUrl"
        />
      </div>

      <div class="form-group">
        <label for="catégorie">catégorie</label>
        <input
          class="form-control"
          id="catégorie"
          required
          v-model="article.catégorie"
          name="catégorie"
        />
      </div>

      <div class="form-group">
        <label for="total_vendu">total_vendu</label>
        <input
          class="form-control"
          id="total_vendu"
          required
          v-model="article.total_vendu"
          name="total_vendu"
        />
      </div>

      <div class="form-group">
        <label for="comments">comments</label>
        <input
          class="form-control"
          id="comments"
          required
          v-model="article.comments"
          name="comments"
        />
      </div>

      

      <button @click="saveArticle" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newArticle">Add</button>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "add-article",
  data() {
    return {
      article: {
        id: null,
        title: "",
        description: "",
        imageUrl: "",
        comments: "",
        price: "",
        total_vendu: "",
        catégorie: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveArticle() {
      let data = {
        title: this.article.title,
        description: this.article.description,
        imageUrl: this.article.imageUrl,
        comments: this.article.comments,
        price: this.article.price,
        total_vendu: this.article.total_vendu,
        catégorie: this.article.catégorie
      };

      ArticleDataService.create(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newArticle() {
      this.submitted = false;
      this.article = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
