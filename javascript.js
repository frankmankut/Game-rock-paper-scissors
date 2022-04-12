function computerPlay() {
    const paperRockScissors = Math.floor(Math.random()*3) + 1;
    if (paperRockScissors === 1) {
        return "Rock";
    }
    else if (paperRockScissors === 2) {
        return "Paper"; 
    }
    else if (paperRockScissors === 3) {
        return "Scissors";
    }
    
}
  console.log(computerPlay());