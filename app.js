let input = document.querySelector("input");
let btns = document.querySelectorAll("button");

console.log(input,btns);

let arr = Array.from(btns);
let str = ""

for(let btn of arr){
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML == "AC"){
            str = "";
            input.value=str;
        }
        else if(e.target.innerHTML == "DEL"){
            str = str.substring(0,str.length-1);
            input.value = str;
        }
        else{
            str+= e.target.innerHTML;  //2+8
            input.value = str;
        }
    })
}
    