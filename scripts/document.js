(function () {
    var currentItemIndex = -1;
    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 32) {
            currentItemIndex++;
            goToSection(currentItemIndex);
        }
    });
    function goToSection(section) {
        var templates = document.querySelectorAll("template");
        var clone = document.importNode(templates[section].content, true);
        var container = document.querySelector("#container");
        var children = Array.prototype.slice.call(container.childNodes, 0);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            child.remove();
        }
        container.appendChild(clone);
    }
})();
