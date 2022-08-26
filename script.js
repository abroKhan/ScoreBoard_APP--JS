// Score Board 1
let score1 = 0;
let scoreEl1 = document.getElementById("points_el1");
function add1Point() {
    score1 += 01;
    scoreEl1.textContent = score1;
}

function add2Points() {
  score1 += 02;
  scoreEl1.textContent = score1;
}

function add3Points() {
    score1 += 03;
    scoreEl1.textContent = score1;
}

// Score Board 2
let score2 = 0;
let scoreEl2 = document.getElementById("points_el2");
function add1PointEl1() {
  score2 += 01;
  scoreEl2.textContent = score2;
}

function add2PointsEl2() {
  score2 += 02;
  scoreEl2.textContent = score2;
}

function add3PointsEl3() {
  score2 += 03;
  scoreEl2.textContent = score2;
}
// Reset Button
function resetScore() {
  scoreEl1.textContent = "00";
  scoreEl2.textContent = "00";
  score1 = 0;
  score2 = 0;
}
