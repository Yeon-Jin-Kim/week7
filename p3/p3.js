const numberElement = document.getElementById('num');

document.getElementById('increase').addEventListener('click', function () {
    let currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = currentValue + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    let currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = currentValue - 1;
});

document.getElementById('reset').addEventListener('click', function () {
    let currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = 0;
});