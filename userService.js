class UserService {
  applyColor(box, color) {
    box.style.backgroundColor = color;
  }

  generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
}
