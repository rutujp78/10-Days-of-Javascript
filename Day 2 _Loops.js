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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // for(let i=0;i<2;i++)
    // {
    //     if(i==0)
    //     {
    //         for(let j=0;j<s.lenght;j++)
    //         {
    //             if(s[j]=="a" || s[j]=="e" || s[j]=="i" || s[j]=="o" || s[j]=="u")
    //             {
    //                 console.log(s[j]);
    //             }
    //         }
    //     }
    //     else
    //     {
    //         for(let j=0;j<s.lenght;j++)
    //         {
    //             if(s[j]!='a' && s[j]!='e' && s[j]!='i' && s[j]!='o' && s[j]!='u')
    //             {
    //                 console.log(s[j]);
    //             }
    //         }
    //     }
    // }
    let vowels="aeiou";
        for(let j=0;j<s.length;j++)
        {
            if(vowels.includes(s[j]))
            {
                console.log(s[j]);
            }
        }
        for(let j=0;j<s.length;j++)
        {
            if(!vowels.includes(s[j]))
            {
                console.log(s[j]);
            }
        }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}