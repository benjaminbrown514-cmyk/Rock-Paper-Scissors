wins = 0;

losses = 0;

ties = 0;
playing = true

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

while (playing){
    
    sign = (window.prompt("Please select one: R, P, or S", "")); 
 

    window.alert("You selected" + sign);

    

    sign1 = getRandomInt(3); 

    switch(sign1){
        case 0:
        window.alert("computer selected R"); 
        break;
        case 1:
        window.alert("computer selected P"); 
        break;
        case 2:
        window.alert("computer selected S"); 
        break;          
        default:
        break;
    }
    sign2 = 1;
    switch(sign){
        case 'r':
        case  'R': 
            sign2 = 0;
            break;
        case 'p':
        case 'P':
            sign2 = 1;
            break;
        case 's':
        case 'S':
            sign2 = 2;
            break;
        default:
            break;
    }

    if (sign1 == sign2){
        ties += 1
        window.alert("It is a tie");
    }
    else if((sign2 - 1)%3 == sign1){
        wins += 1
        window.alert("You win");
    }
    else if((sign1 - 1)%3 == sign2){
        losses += 1
        window.alert("You lose "); 
    }

    window.alert("Stats so far:\nwins: " + wins + "\nlosses: " + losses + "\nties: " + ties)

    playing = window.confirm("Play again?" )










}

