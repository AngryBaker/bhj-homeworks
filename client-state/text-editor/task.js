const editor = document.getElementById("editor");
if (localStorage.editorValue) {
    editor.value = localStorage.editorValue;
};

editor.addEventListener("keyup", () => {
  localStorage.editorValue = editor.value;
})