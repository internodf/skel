<template>
  <div>
    <menu-superior></menu-superior>
    <menu-lateral></menu-lateral>
  </div>
</template>

<script>
  import {
    routes
  } from "./routes";
  import MenuSuperior from "./components/home/MenuSuperior";
  import MenuLateral from "./components/home/MenuLateral.vue";
  import Service from "./model/service/Service";

  export default {
    components: {
      "menu-lateral": MenuLateral,
      "menu-superior": MenuSuperior
    },
    data() {
      return {
        msg: "Demanda AE",
        routes: routes.filter(route => route.menu)
      };
    },
    created() {},
    methods: {}
  };

</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter,
  .pagina-leave-to {
    opacity: 0;
  }

  .pagina-leave,
  .pagina-enter-to {
    opacity: 0;
  }

  .pagina-enter-active,
  .pagina-leave-active {
    transition: opacity 100ms;
  }

  .container-full {
    margin: 0 auto;
    width: 100%;
  }

  .cabecalho-modulo {
    font-size: 200%;
    font-weight: bold;
  }

</style>
