<template>
<div>
    <div :id="id"
        style="width: 100%; height: 100%;"
        class="editor-style">
    </div>
</div>  
</template>

<script>
import { ace } from '../load-brace'

export default {
  data() {
    return {
      editor: Object,
      beforeContent: ""
    };
  },
  props: ["id", "content", "lang", "theme"],
  mounted() {
    let lang
    if(this.lang) {
      const reg = /(.*)(?:\.([^.]+$))/
      lang = this.lang.match(reg)[2] || 'text'
    } else {
      lang = 'text'
    }
    const theme = this.theme || 'chrome'

    this.editor = ace.edit(this.id)
    this.editor.setValue(this.content, 1)

    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)

    this.editor.setOptions({
      enableBasicAutocomplation: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    })
  }
};
</script>

<style scoped>
.editor-style {
  margin-top: 5px;
}
</style>
