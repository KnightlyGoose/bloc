let money = 10;
let stability = 10;


const state = {
    money: 10,
    stability: 10,
    oil: 5,
    material: 5,
    goods: 5
}
 function update() {
  document.getElementById("money").textContent = state.money;
  document.getElementById("stability").textContent = state.stability;
  document.getElementById("oil").textContent = state.oil;
  document.getElementById("material").textContent = state.materials;
  document.getElementById("goods").textContent = state.goods;

  if (state.stability <= 0) {
    alert("Coup! Game Over.");
  }

  if (state.money <= 0) {
    alert("Bankrupt! Game Over.");
  }
}

function invest() {
  state.money -= 2;
  state.material += 2;
  state.stability -= 1;
  update();
}

function sell() {
  state.goods -= 1;
  state.money += 3;
  update();
}

update();