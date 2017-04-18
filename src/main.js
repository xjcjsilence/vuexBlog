import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './store'
import router from './router'

import $ from 'jquery'

Vue.use(VueResource);

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
})
