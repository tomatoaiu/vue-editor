import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import editor from './modules/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules : {
        editor
    }
})