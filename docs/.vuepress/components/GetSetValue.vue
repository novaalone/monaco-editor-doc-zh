<template>
  <div id="container-get-set" style="height: 100px; width: 80%"></div>
  <div class="display-column">
    <button @click="getValue">getValue()</button>
    <button @click="setValue">setValue('456')</button>
  </div>
</template>


<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    let monacoEditor = ref(null);

    onMounted(() => {
      setTimeout(() => {
        monacoEditor = monaco.editor.create(
          document.getElementById("container-get-set"),
          {
            value: "123",
            theme: "vs-dark",
          }
        );
      }, 100);
    });

    onUnmounted(() => {
        monacoEditor.dispose();
    })

    const getValue = () => {
      alert(monacoEditor.getValue());
    };

    const setValue = () => {
      monacoEditor.setValue("456");
    };

    return {
      setValue,
      getValue,
    };
  },
});
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