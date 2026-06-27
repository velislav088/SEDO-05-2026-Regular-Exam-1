document.addEventListener('DOMContentLoaded', function () {
  var colorInput = document.getElementById('color-input');
  var applyButton = document.getElementById('apply-btn');
  var randomButton = document.getElementById('random-btn');
  var box = document.getElementById('box');

  if (!colorInput || !applyButton || !randomButton || !box) {
    return;
  }

  applyButton.addEventListener('click', function () {
    box.style.backgroundColor = colorInput.value;
  });

  randomButton.addEventListener('click', function () {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorInput.value = randomColor;
    box.style.backgroundColor = randomColor;
  });
});
