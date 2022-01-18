<template>
 <div id="container-theme" style="height: 100px; width: 80%;"></div>
 <div class="display-column">
     <button @click="switchTheme('vs')">vs</button>
     <button @click="switchTheme('vs-dark')">vs-dark</button>
     <button @click="switchTheme('hc-black')">hc-black</button>
 </div>
</template>


<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

export default {
  mounted() {
    monaco.editor.create(document.getElementById("container-theme"), {
      value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
      theme: 'vs-dark',
      language: 'javascript',
      readOnly: true,
      lineNumbers: 'off',
      roundedSelection: false,
      scrollBeyondLastLine: false
    });
  },

  methods: {
      switchTheme(themeName) {
          monaco.editor.setTheme(themeName);
      }
  }
};
</script>

<style scoped>
.display-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;
}
button {
    margin: 5px;
}
</style>