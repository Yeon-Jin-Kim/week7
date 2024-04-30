
document.getElementById('color').addEventListener('change', function () {
    const selectedColor = this.value;
    const textElement = document.getElementById('greeting');

    textElement.style.color = selectedColor;
})
