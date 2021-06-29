<template>
  <div id="panier">

    <h2>Voici le panier</h2>
    <div
      id="panierContainer"
      v-for="panierItem in panierStorage"
      :key="panierItem.articles"
    >
      <div class="panierElement" v-if="panierItem.articles">
        <h4>Nom : {{ panierItem.articles.title }}</h4>
        <p>Prix : {{ panierItem.articles.price }}</p>
        <div class="inlineFlex">
          <p>Quantité :</p>
          <i
            class="fas fa-minus-circle"
            @click="changeQuantity(panierItem.articles.id, 'less')"
          ></i>
          <p>{{ panierItem.quantity }}</p>
          <i
            class="fas fa-plus-circle"
            @click="changeQuantity(panierItem.articles.id, 'more')"
          ></i>
        </div>
        <i
          class="fas fa-times"
          @click="deletePanierItem('articles', panierItem.articles.id)"
        ></i>
      </div>
    </div>
    <button @click="validerPanier">Valider Ma Commande</button>
    <br><br>
    <h4>Prix Total : {{ prixTotal }} €</h4>
  </div>
</template>

<script>
export default {
  name: "Panier",
  data: function () {
    return {
      panierStorage: JSON.parse(localStorage.getItem("panier"))
    };
  },
  methods: {
    deletePanierItem(type, id, articles) {
      if (type === "articles") {
        console.log(articles);
        const indice = this.panierStorage.findIndex(
          (panier) => panier.curentarticles === articles
        );
        console.log("articles" + indice);
        this.panierStorage.splice(indice, 1);
      } else if (type === "articles") {
        let indice = this.panierStorage.findIndex(
          (panier) => panier.articles.id === id
        );
        console.log("articles" + indice);
        this.panierStorage.splice(indice, 1);
      }
      const panierToStorage = JSON.stringify(this.panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    changeQuantity(id, change) {
      const indice = this.panierStorage.findIndex(
        (panier) => panier.articles.id === id
      );
      if (change === "less") {
        if (this.panierStorage[indice].quantity > 1) {
          this.panierStorage[indice].quantity -= 1;
        } else {
          this.deletePanierItem("articles", id);
        }
      } else if (change === "more") {
        this.panierStorage[indice].quantity += 1;
      }
      const panierToStorage = JSON.stringify(this.panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    validerPanier() {
      console.log(this.panierStorage);
    },
  },
  computed: {
   
    prixTotal: function () {
      const panier = this.panierStorage;
      let sum = 0;
      if (panier) {
        panier.forEach((panierItems) => {

            sum += panierItems.articles * panierItems.quantity;
          console.log(sum);
        });
      }
      // pour que le total ait toujours que 2 chiffres après la virgule
      const precision = precision || 2;
      const tmp = Math.pow(10, precision);
      return Math.round(sum * tmp) / tmp;
    },
  },
};
</script>

<style scoped>
#panier {
  background: whitesmoke;
  margin: 1% 10%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

button {
  width: 15%;
  margin-top: 4%;
  padding: 10px;
  background-color: whitesmoke;
  font-weight: bold;
  font-size: 13px;
  border-radius: 10px;
  border: #e0b558 3px solid;
  color: #e0b558;
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: #e0b558;
  color: white;
  cursor: pointer;
}
.panierElement {
  background: white;
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 10px;
}
.fa-times {
  transition: font-size 0.2s;
}
.fa-times:hover {
  font-size: 20px;
}
i:hover {
  font-weight: bold;
  cursor: pointer;
}
.inlineFlex {
  width: 30%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>