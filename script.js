const canvas = document.getElementsByClassName('canvas')[0];
var color = document.getElementById('color');
var e;
color.addEventListener('change', (e) => {
  color = e.target.value;
});
let size = 13;
for (let i = 0; i < size * size - 1; i++) {
  const square = document.createElement('div');
  square.classList.toggle('square');
  canvas.appendChild(square);

  const drawing = () => {
    clearCanvas();
    if (square.style.backgroundColor !== color) {
      square.style.backgroundColor = 'black';
    }
    square.style.backgroundColor = color;
  };

  square.addEventListener('mousemove', drawing);

  const clearCanvas = () => {
    if (click === 'Clear Canvas') {
      square.style.backgroundColor = 'transparent';
    } else {
      square.style.backgroundColor = color;
    }
  };

  const button = document.getElementsByClassName('clearCanvas')[0];
  const click = button.innerText;
  button.addEventListener('click', clearCanvas);
}
