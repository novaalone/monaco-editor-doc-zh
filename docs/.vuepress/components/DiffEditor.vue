<template>
  <div id="container-diff" style="height: 100px; width: 80%"></div>
</template>


<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    let diffEditor = ref(null);

    onMounted(() => {
      const originalModel = monaco.editor.createModel('hello world', 'text/plain');
      const modifiedModel = monaco.editor.createModel('Hello World', 'text/plain');

      diffEditor = monaco.editor.createDiffEditor(document.getElementById('container-diff'));
      diffEditor.setModel({
          original: originalModel,
          modified: modifiedModel
      });
    });

    onUnmounted(() => {
        diffEditor.dispose();
    });

    return {
    };
  },
});
</script>
