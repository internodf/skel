<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div id="menu-lateral" class="col-sm-2">
      <menu-lateral :rotas="routes" :id="id"/>
    </div>
    <div class="col-sm-10">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
  </div>
  </div>
</template>

<script>
import { routes } from "./routes";

import MenuLateral from "./components/home/MenuLateral.vue";
import DemandaService from "./model/service/Service";

export default {
  components: {
    "menu-lateral": MenuLateral
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