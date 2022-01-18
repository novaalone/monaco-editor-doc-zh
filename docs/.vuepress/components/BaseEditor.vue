<template>
 <div id="container" style="height: 100px; width: 80%;"></div>
</template>


<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

export default {
  mounted() {
    monaco.editor.create(document.getElementById("container"), {
      value: "123",
    });
  },
};
</script>