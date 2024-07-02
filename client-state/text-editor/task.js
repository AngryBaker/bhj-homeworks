const editor = document.getElementById("editor");
if (localStorage.editorValue) {
    editor.value = localStorage.editorValue;
};

editor.addEventListener("change", () => {
  localStorage.editorValue = editor.value;
})