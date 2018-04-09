import Vue from 'vue/dist/vue.esm.js'
import App from './index.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import {store} from './store'
import './lib/ace/src-min-noconflict/ace'
import './lib/ace/src-min-noconflict/ext-language_tools'
import './lib/ace/src-min-noconflict/ext-modelist'
import './lib/ace/src-min-noconflict/theme-monokai'

Vue.use(BootstrapVue)
Vue.use(Vuex)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})