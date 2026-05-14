
const state = {

  resources: {
    money: 10,
    oil: 5,
    material: 5,
    goods: 5
  },

  domestic: {
    stability: 10,
    popularity: 10,
    oppression: 10,
    capitalism: 50

  },

  military: {
    strength: 10,
    size: 10,
    airforce: 0,
    weapons: 50,
    tech_level: 1,
    loyalty: 50
  },

  foreign: {
    eagle_relations: 0,
    bear_relations: 0
  }
   
    
   
}


 function update() {
  document.getElementById("money").textContent = state.money;
  document.getElementById("stability").textContent = state.stability;
  document.getElementById("oil").textContent = state.oil;
  document.getElementById("material").textContent = state.material;
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