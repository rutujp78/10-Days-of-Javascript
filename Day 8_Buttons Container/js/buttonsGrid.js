let btn5=document.getElementById("btn5");
btn5.addEventListener("click", ()=>{
    let btn11=btn1.innerText;
    btn1.innerText=btn4.innerText;
    btn4.innerText=btn7.innerText;
    btn7.innerText=btn8.innerText;
    btn8.innerText=btn9.innerText;
    btn9.innerHTML=btn6.innerHTML;
    btn6.innerHTML=btn3.innerHTML;
    btn3.innerHTML=btn2.innerHTML;
    btn2.innerHTML=btn11;
})