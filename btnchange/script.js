let btn1 = document.getElementById("btn1");
let btn2=document.getElementById("btn2")
btn1.onclick=()=>{
    document.body.style.backgroundColor="red";
    btn2.remove();
}