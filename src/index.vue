<template>
<div>
    <b-container fluid>
        <b-row>
            <b-col md="3" xl="2" cols="12">
                <tree></tree>
            </b-col>
            <b-col md="9" xl="10" cols="12">
                <editorList></editorList>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import EditorList from "./components/editor-list"
import Tree from "./components/tree.vue";
export default {
    name: "App",
    components : {
        editorList : EditorList,
        tree: Tree
    }
}
</script>

<style scoped>

</style>



