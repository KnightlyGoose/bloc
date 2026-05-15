
const state = {

  resources: {
    clamped: false,
    money: 10,
    oil: 5,
    material: 5,
    goods: 5
  },

  domestic: {
    clamped: true,
    stability: 10,
    popularity: 10,
    oppression: 10,
    capitalism: 50,
    military_loyalty: 50,


  },

  military: {
    clamped: false,
    strength: 10,
    size: 10,
    airforce: 0,
    weapons: 50,
    tech_level: 1,
  },

  foreign: {
    clamped: true,
    eagle_relations: 0,
    bear_relations: 0,
    triangle_relations: 50

  }
   
    
   
}

const clamp = (val ,min, max) => Math.min(Math.max(val, min), max);

function changeStat(category, stat, amount) {

  const group = state[category];
  

  if (!group || group[stat] == undefined) {
    console.error("Invalid stat: ", category, stat);
    return;
  }

  state[category][stat] += amount;

  if (group.clamped) {
    group[stat] = clamp(group[stat], 0, 100);
  }
}


 function update() {
  document.getElementById("money").textContent = state.resources.money;
  document.getElementById("stability").textContent = state.domestic.stability;
  document.getElementById("oil").textContent = state.resources.oil;
  document.getElementById("material").textContent = state.resources.material;
  document.getElementById("goods").textContent = state.resources.goods;

  checkLoss();
  
 
}

function invest() {
  changeStat("resources", "money", 100);
}

function checkLoss() {
  if (state.foreign.triangle_relations <= 0)  {
    alert("Triangle");
  }

   if (state.stability <= 0) {
    alert("Coup! Game Over.");

  }

  if (state.money <= 0) {
    alert("Bankrupt! Game Over.");
  }

}

update();