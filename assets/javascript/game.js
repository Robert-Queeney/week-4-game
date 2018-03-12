let randomNumber; 
let wins = 0; 
let losses = 0; 
let totalScore; 
let crystalRandom1; 
let crystalRandom2;
let crystalRandom3;
let crystalRandom4;


// loading crystal variables when page loads
window.onload = function(){
    getRandom(); 
}
// get all random functions
function getRandom (){
    crystalRandom1 = Math.floor(Math.random() *12 + 1); 
    crystalRandom2 = Math.floor(Math.random() *12 + 1);
    crystalRandom3 = Math.floor(Math.random() *12 + 1);
    crystalRandom4 = Math.floor(Math.random() *12 + 1);
    console.log("1", crystalRandom1);
    console.log("2", crystalRandom2);
    console.log("3", crystalRandom3);
    console.log("4", crystalRandom4);
    randomNumber = Math.floor(Math.random() * 102) + 18; 
    $(`.r-number`).text(randomNumber);
    totalScore = 0; 
    $(`#ts`).text(totalScore);
}

// total score
totalScore = 0; 
$(`#ts`).text(totalScore);

// crystals 

$(`#crystal1`).click(function() {
    totalScore = totalScore + crystalRandom1 
    $(`#ts`).text(totalScore); 
    console.log("total score", totalScore); 
    conclusion(); 
    
})

$(`#crystal2`).click(function() {
    totalScore = totalScore + crystalRandom2 
    $(`#ts`).text(totalScore); 
    console.log("total score", totalScore); 
    conclusion(); 
    
})

$(`#crystal3`).click(function() {
    totalScore = totalScore + crystalRandom3
    $(`#ts`).text(totalScore); 
    console.log("total score", totalScore); 
    conclusion(); 
    
})

$(`#crystal4`).click(function() {
    totalScore = totalScore + crystalRandom4
    $(`#ts`).text(totalScore); 
    console.log("total score", totalScore); 
    conclusion(); 
     
})

// wins losses 
function conclusion() {
    if (totalScore > randomNumber){
         losses ++ ; 
         console.log(losses, wins); 
        $(`#losses`).text(losses); 
        $(`#game-result`).text("You lose!");
        getRandom();
        
    } else if (totalScore === randomNumber){
         wins ++ ; 
        $(`#wins`).text(wins); 
        $(`#game-result`).text("You win!");
        getRandom();
        
    }
}

// trying to get the page to reload after a win or loss
// found a better way
// function restart(){
//     if (wins ++ || losses ++){
//         location.reload(); 
//     }
// }


console.log("random number", randomNumber); 




