window.addEventListener('DOMContentLoaded', event => {
  init();
});

var nums = [1, 2, 3, 4, 5, 6, 7, 8, null];
const container = document.getElementById('game-container');

function init() {
  nums = shuffle(nums);
  drawBoard();
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createTile(content) {
  const p = document.createElement('p');
  content !== null && (p.innerText = `${content}`);
  const tile = document.createElement('div');
  tile.appendChild(p);
  tile.classList.add('tile');
  tile.addEventListener('click', tileClick);

  content === null && tile.classList.add('empty');
  return tile;
}

function tileClick(event) {
  const { innerText } = event.target;
  if (isMovable(innerText)) {
    swapVals(getIndex(parseInt(innerText)), getIndex(null));
    empty(container);
    drawBoard();
    if (checkWin()) {
      showNotification();
      setTimeout(() => {
        empty(container);
        init();
      }, 2000);
    }
  }
}

function isMovable(num) {
  if (num.length === 0) {
    return false;
  }
  const i = getIndex(parseInt(num));
  const empty = getIndex(null);
  if (
    empty + 3 === i ||
    empty - 3 === i ||
    (i % 3 === 0 && i + 1 === empty) ||
    (i % 3 === 2 && i - 1 === empty) ||
    (i % 3 === 1 && (i - 1 === empty || i + 1 === empty))
  ) {
    return true;
  } else return false;
}

function getIndex(num) {
  return nums.indexOf(num);
}

function swapVals(a, b) {
  nums[a] = nums.splice(b, 1, nums[a])[0];
}

function empty(elem) {
  elem.innerHTML = '';
}

function checkWin () {
  let win = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i + 1 !== nums[i]) {
      win = false;
      i = nums.length;
    }
  }
  return win;
}

function drawBoard() {
  nums.forEach(num => {
    const tile = createTile(num);
    container.appendChild(tile);
  });
}

function showNotification () {
  const el = document.getElementById('notification');
  el.style.display = 'block';
  window.setTimeout(() => {
    el.style.display = 'none';
  }, 2500);
}