interface Element {
  // Add content property to element via declaration merging
  content: DocumentFragment;
}

(function() {
  let currentItemIndex = -1;
  window.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.keyCode == 32) {
      currentItemIndex++;
      goToSection(currentItemIndex);
    }
  });

  function goToSection(section: number): void {

    let templates = document.querySelectorAll("template");
    let clone = document.importNode(templates[section].content, true);

    let container = document.querySelector("#container");

    let children = Array.prototype.slice.call(container.childNodes, 0)
    for (let child of children) {
      child.remove();
    }

    container.appendChild(clone);
  }
})();
