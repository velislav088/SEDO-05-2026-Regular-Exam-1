document.addEventListener('DOMContentLoaded', function () {
  var colorInput = document.getElementById('color-input');
  var applyButton = document.getElementById('apply-btn');
  var randomButton = document.getElementById('random-btn');
  var box = document.getElementById('box');

  if (!colorInput || !applyButton || !randomButton || !box) {
    return;
  }

  var userService = new UserService();

  applyButton.addEventListener('click', function () {
    userService.applyColor(box, colorInput.value);
  });

  randomButton.addEventListener('click', function () {
    var randomColor = userService.generateRandomColor();
    colorInput.value = randomColor;
    userService.applyColor(box, randomColor);
  });
});
