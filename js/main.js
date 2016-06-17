function randomChoice(sequence){
    // Function for choosing one value from sequence /array/
    
    var max = sequence.length - 1;
    var min = 0;
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);

    return sequence[rand]
}

