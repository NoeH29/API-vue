import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  State: {
    panier: [],
    },
    mutations: {
    pushToPanier(state, item) {
      let panierStorage;
      if (localStorage.getItem("panier")) {
        panierStorage = localStorage.getItem("panier");
        panierStorage = JSON.parse(panierStorage);
        console.log(item.curentMenu);
        if (!item.curentMenu) {
          const indice = panierStorage.findIndex(
            (panier) => panier.id_produit === item.id_produit
          );
          if (indice >= 0) {
            console.log("toto");
            console.log(indice);
            panierStorage[indice].quantity += 1;
            console.log(panierStorage[indice]);
          } else {
            item.quantity = 1;
            panierStorage.push(item);
          }
        } else {
          item.quantity = 1;
          panierStorage.push(item);
        }
      } else {
        panierStorage = [];
        item.quantity = 1;
        panierStorage.push(item);
      }
      const panierToStorage = JSON.stringify(panierStorage);
      localStorage.setItem("panier", panierToStorage);
    },
    },
    actions: {
    pushToPanier(context, item) {
    context.commit("pushToPanier", item);
    },
    },
    
});
