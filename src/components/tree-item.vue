<template>
<div>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="clickedItem({name: model.name})"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
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
      open: false
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
    ...mapActions(["addEditor"]),
    addEditorFromUi({name = "test"} = {}) {
      if(this.isFile){
        this.addEditor({ id: name, content: "" })
      }
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
</style>


