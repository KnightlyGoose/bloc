
const state = {

  turn: 1,

  resources: {
    money: 0,
    stability: 0,
    military: 0,
    food: 0,

  },
    
  relations: {
    eagle: 0,
    bear: 0,
  }
   
}

function changeStat(category, stat, amount) {

  const group = state[category];
  

  if (!group || group[stat] == undefined) {
    console.error("Invalid stat: ", category, stat);
    return;
  }

  state[category][stat] += amount;

}

function applyAction(action) {
  for (const effect of action.effect) {
    const category = effect[0];
    const stat = effect[1];
    const amount = effect[2];

    changeStat(category, stat, amount);
  }
}


 function update() {
  
  for (const category in state) {
    for (const stat in state[category]) {
      const element = document.getElementById(stat);

      if (element) {
        element.textContent = state[category][stat];
      }

      continue;
    }
  }
  
 
}

update();