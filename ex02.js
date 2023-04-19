function countWestView(buildings) {
  let count = 0;
  for (let i = 0; i < buildings.length; i++) {
    let westSide = true;
    for (let j = i + 1; j < buildings.length; j++) {
      if (buildings[j] >= buildings[i]) {
        westSide = false;
        break;
      }
    }
    if (westSide) {
      count++;
    }
  }
  return count;
}

const buildings = [3, 7, 8, 3, 6, 1];
console.log(countWestView(buildings)); 
