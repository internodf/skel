import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {
    routes
} from './routes.js';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css'

// import 'jquery/dist/jquery.js';
// import 'bootstrap/dist/js/bootstrap.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})