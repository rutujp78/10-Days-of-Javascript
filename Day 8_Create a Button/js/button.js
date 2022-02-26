let btn=document.getElementById("btn");
let i=0;
btn.addEventListener("click", ()=>{
    i+=1;
    document.getElementById("btn").innerText=i;
})