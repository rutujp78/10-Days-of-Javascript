'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName=new Date(dateString).getDay();
    // Write your code here
    switch(dayName)
    {
        case 0:
            return "Sunday";
            break;
            
        case 1:
            return "Monday";
            break;
            
        case 2:
            return "Tuesday";
            break;
    
        case 3:
            return "Wednesday";
            break;
        
        case 4:
            return "Thursday";
            break;
        
        case 5:
            return "Friday";
            break;
            
        case 6:
            return "Saturday";
            break;
    }
    // return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}