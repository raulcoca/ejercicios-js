let elements = document.querySelectorAll('.fn-remove-me');

elements.forEach((element) => {
    element.parentNode.removeChild(element);
});
