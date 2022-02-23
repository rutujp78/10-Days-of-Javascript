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
function getMaxLessThanK(n, k)
{
    let and,max=0;
    if(n>k)
    {
        for(let i=1;i<=n;i++)
        {
            for(let j=i;j<=n;j++)
            {
                if(i<j)
                {
                    and=j&i;
                }
                if(max<and && and<k)
                {
                    max=and;
                }
            }
        }
    }
    else
    {
        for(let i=1;i<=k;i++)
        {
            for(let j=i;j<=k;j++)
            {
                if(i<j)
                {
                    and=j&i;
                }
                if(max<and && and<k)
                {
                    max=and;
                }
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}