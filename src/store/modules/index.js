import Vue from 'vue/dist/vue.esm.js';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  editorItems: [
    {
      id: "test.html",
      content: "test_text",
      changeContent: value => this.content = value
    }
  ]
}

const actions = {
  addEditor({commit}, payload){
    commit("ADD_EDITOR", payload)
  },
  changeId({commit}, payload){
    commit("CHANGE_ID", payload)
  }
}

const mutations = {
  ADD_EDITOR(state, payload) {
    state.editorItems.push({
      id: payload.id,
      content: payload.content,
      changeContent: value => this.content = value
    })
  },
  CHANGE_ID(state, payload) {
    let item = state.editorItems.find(({id}) => {
      return id === payload.id
    })
    if(item){
      item.id = payload.setId
    }
  }
}

const getters = {
    editorItems: state => state.editorItems
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}