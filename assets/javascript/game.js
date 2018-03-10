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
    crystalRandom1 = Math.floor(Math.random() *13); 
    crystalRandom2 = Math.floor(Math.random() *13);
    crystalRandom3 = Math.floor(Math.random() *13);
    crystalRandom4 = Math.floor(Math.random() *13);
    console.log("1", crystalRandom1);
    console.log("2", crystalRandom2);
    console.log("3", crystalRandom3);
    console.log("4", crystalRandom4);
}

// math random function

randomNumber = Math.floor(Math.random() * 102) + 18; 
$(`.r-number`).text(randomNumber);

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
        location.reload(); 
    } else if (totalScore === randomNumber){
         wins ++ ; 
        $(`#wins`).text(wins); 
        location.reload(); 
    }
}

// trying to get the page to reload after a win or loss
// function restart(){
//     if (wins ++ || losses ++){
//         location.reload(); 
//     }
// }


console.log("random number", randomNumber); 




