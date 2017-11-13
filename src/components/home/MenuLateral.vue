<template>
  <nav>
      <ul class="nav nav-pills nav-stacked menu-lateral-item">
          <li :class="rota.class" v-for="rota in rotas" :key="rota.pah">
              <router-link :id="rota.name" :to="{name: rota.name ? rota.name : '/', params: { id: id}}">{{ rota.titulo }}</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  props: {
      rotas : {
          type: Array,
          required: true
      },
      id: {
          required: true
      }
  }
}
</script>

<style scoped>
.menu-lateral-item .router-link-active, .menu-lateral-item a:hover {
    background-color: #337ab7;
    color: white;
}
</style>
