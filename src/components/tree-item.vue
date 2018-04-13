<template>
<div>
  <li class="tree-item">
    <div
      :class="{bold: isFolder}"
      @click.left="clickedItem({name: model.name})"
      >
      <b-row>
        <b-col md="1" xl="2" cols="12" class="tree-item-icon">
          <span v-if="isFolder">
            <div v-if="open">
              <font-awesome-icon :icon="['fas', 'folder-open']" />
            </div>
            <div v-else>
              <font-awesome-icon :icon="['fas', 'folder']" />
            </div>
          </span>
          <span v-else>
            <font-awesome-icon :icon="['fas', 'file']" />
          </span>          
        </b-col>
        <b-col md="11" xl="10" cols="12" class="tree-item-text">
          {{ model.name }}
          <b-dropdown variant="link" size="sm" no-caret>
            <template slot="button-content">
              &#x1f50d;<span class="sr-only">Search</span>
            </template>
            <b-dropdown-item-button href="#">Open</b-dropdown-item-button>
            <b-dropdown-item-button href="#" @click.prevent="showModal = !showModal">Set Name</b-dropdown-item-button>
          </b-dropdown>
        </b-col>
      </b-row>
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </tree-item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
  <b-modal 
    v-model="showModal"
    title="Set Name"
    @shown="clearName">
    <p>{{model.name}}</p>
    <b-container fluid>
      <b-form-input 
        type="text"
        placeholder="Enter File or Folder name"
        v-model="name">
      </b-form-input>
    </b-container>
    <div slot="modal-footer" class="w-100">
      <div class="float-right">
        <b-btn size="sm" variant="secondary" @click="showModal=false">
          Close
        </b-btn>
        <b-btn size="sm" variant="primary" 
          @click="changeEditorId({id: model.name, setId: name})">
          Set
        </b-btn>
      </div>
    </div>
  </b-modal>
</div>
</template>

<script>
import Vue from "vue/dist/vue.esm.js"
import { createNamespacedHelpers } from "vuex"
const { mapActions } = createNamespacedHelpers("editor")

export default {
  name: "tree-item",
  props: {
    model: Object
  },
  data() {
    return {
      open: false,
      showModal: false,
      name: "",
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    },
    isFile(){
      return !(this.model.children && this.model.children.length)
    }
  },
  methods: {
    ...mapActions(["addEditor", "changeId"]),
    addEditorFromUi({name = "test"} = {}) {
      if(this.isFile){
        this.addEditor({ id: name, content: "" })
      }
    },
    changeEditorId({id = "", setId = ""} ={}) {
      this.changeId({id, setId})
      this.clearName()
      this.showModal = false
    },
    clearName () {
      this.name = ""
    },
    clickedItem({name = "test"} = {}){
      this.toggle()
      this.addEditorFromUi({name})
    },
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType() {
      if (!this.isFolder) {
        Vue.set(this.model, "children", [])
        this.addChild()
        this.open = true
      }
    },
    addChild() {
      this.model.children.push({
        name: "new stuff"
      })
    }
  }
}
</script>

<style scoped>
.item {
  font-family: Menlo, Consolas, monospace;
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

.tree-item{
  list-style: none;
}

.tree-item-icon{
  padding: 0;
  padding-left: 5px;
  line-height: 30px;
}

.tree-item-text{
  padding: 0;
  margin-left: -12px;
}
</style>


