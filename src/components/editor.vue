<template>
<div>
    <div :id="id"
        style="width: 100%; height: 100%;"
        class="editor-style">
    </div>
</div>  
</template>

<script>
export default {
  data() {
    return {
      editor: Object,
      beforeContent: ""
    };
  },
  props: ["id", "content", "lang", "theme"],
  mounted() {
    const lang = this.lang || "html"
    const theme = this.theme || "monokai"

    this.editor = window.ace.edit(this.id)
    this.editor.setValue(this.content, 1)

    let modelist = window.ace.require("ace/ext/modelist")
    let mode = modelist.getModeForPath(lang).mode
    this.editor.session.setMode(mode)
    this.editor.setTheme(`ace/theme/${theme}`)
  }
};
</script>

<style scoped>
.editor-style {
  margin-top: 5px;
}
</style>
