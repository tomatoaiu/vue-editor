<template>
<div>
  <treeItem
    class="item"
    :model="treeData">
   </treeItem>
</div>
</template>

<script>
import TreeItem from "./tree-item.vue"

export default {
  name: "tree",
  data() {
    return {
      treeData: {
        name: "src",
        children: [
          { name: "test.js" },
          { name: "a.css" },
          {
            name: "js",
            children: [
              {
                name: "comoponents",
                children: [{ name: "world.md" }, { name: "cat.xml" }]
              },
              { name: "yahhoo.go" },
              { name: "up.rust" },
              {
                name: "config",
                children: [{ name: "ace.vue" }, { name: "sunday.py" }]
              }
            ]
          }
        ]
      }
    };
  },
  components: {
    treeItem: TreeItem
  }
};
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

