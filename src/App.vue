<template>

  <div id="app">
  <div>
  <Navbar />
  </div>
    <div class="container">

      <router-view />

    </div>
  <div>
  <Footer />
  </div>
  </div>


</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Footer,
    Navbar
  }
};
</script>

<style >
html {
  -webkit-animation: color-change-2x 15s linear infinite alternate both;
	animation: color-change-2x 15s linear infinite alternate both;
  height: 100%;
  width: 100%;
}
.jumbotron{
  height: 60%;
}
#app{
  -webkit-animation: color-change-2x 15s linear infinite alternate both;
	animation: color-change-2x 15s linear infinite alternate both;
  height: 100%;
    width: 100%;
    margin: 0;
    display: table;
}
.container {
  -webkit-animation: color-change-2x 15s linear infinite alternate both;
	animation: color-change-2x 15s linear infinite alternate both;
  height: 100%;
  animation:bounce-top 1.3s both;
  margin-top: 6%
}


@-webkit-keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #2769f7;
  }
}
@keyframes color-change-2x {
  0% {
    background: #19dcea;
  }
  100% {
    background: #2769f7;
  }
}

.container{animation:bounce-top 1.3s both}
@keyframes bounce-top{0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%{transform:translateY(-24px);animation-timing-function:ease-in}65%{transform:translateY(-12px);animation-timing-function:ease-in}82%{transform:translateY(-6px);animation-timing-function:ease-in}93%{transform:translateY(-4px);animation-timing-function:ease-in}25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}} 


</style>
