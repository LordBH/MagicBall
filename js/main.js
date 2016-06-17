var MagicBall = [
    'Yer',
    'Sure',
    'U can',
    'It must happen',
    'Luck on your side',
    'Maybe',
    'If u try',
    'Just do it',
    'Fuck this',
    'Idiot can do it',
    'U just a duck',
    'U loose',
    'U so poor for this',
    "Even don't try",
    'No'
];



function randomChoice(sequence){
    // Function for choosing one value from sequence /array/
    
    var max = sequence.length - 1;
    var min = 0;
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);

    return sequence[rand]
}

var ballSaid = randomChoice(MagicBall);
document.getElementById('ballResult').innerHTML = ballSaid;