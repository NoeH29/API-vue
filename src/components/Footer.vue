<template>
  <div id="foot">
    <div id="liens">
      <a href="#">
        <img src="../assets/facebook.png" alt="" />
      </a>
      <a href="#">
        <img src="../assets/instagram.png" alt="" />
      </a>
      <a href="#">
        <img src="../assets/twitter.png" alt="" />
      </a>
      <a href="#">
        <img src="../assets/mail.png" alt="" />
      </a>
    </div>
    <br><br>
    <a href='#' style="color:rgb(0,0,0);">Règlement</a><br>
    <router-link to="/mentionlg" style="color:rgb(0,0,0);">Politique de Confidentialité</router-link>
  </div>
</template>

<script>
export default {
  name: "foot",
};
</script>

<style>
#foot {
  background-color: bisque;
  height: 10vh;
  padding: 2.1em 0;
  border-top: .1em solid #ecebe9;
  font-size: .75em;
  text-align: center;
}

#liens {
  height: 0%;
  width: 60%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
img {
  cursor: pointer;
}
img {
  height: 5vh;
}
a {
font-style: italic;

}
</style>