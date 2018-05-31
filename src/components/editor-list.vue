<template>
<div>
    <!-- <b-button @click="addEditorFromUi()">new editor +</b-button> -->
    <b-tabs>
        <b-tab v-for="({id, content, changeContent}, index) of editorItems"
            :key="index"
            v-bind:title="id">
            <editor v-bind:id="id"
            :lang='id'
                v-bind:content="content"
                class="ace-editor">
            </editor>
        </b-tab>
        <b-nav-item slot="tabs" @click.prevent="addEditorFromUi()" href="#">
          +
        </b-nav-item>
        <div slot="empty" class="text-center text-muted">
          There are no open tabs
          <br> Open a new tab using + button.
        </div>
    </b-tabs>
</div>  
</template>

<script>
import Editor from "./editor.vue"
import { createNamespacedHelpers } from "vuex"
const { mapGetters, mapActions } = createNamespacedHelpers("editor")

export default {
  name: "editor-list",
  data() {
    return {
      idCount: 0
    };
  },
  computed: {
    ...mapGetters(["editorItems"])
  },
  methods: {
    ...mapActions(["addEditor"]),
    addEditorFromUi() {
      this.addEditor({ id: `editor${this.idCount++}`, content: "" })
    }
  },
  components: {
    editor: Editor
  }
};
</script>

<style scoped>
.ace-editor {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
