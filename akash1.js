let bulb= document.querySelector("#bulb")
let button= document.querySelector("button")
let flag= 0

button.addEventListener("click",function(){
    if(flag == 0){
    bulb.style. backgroundColor = "yellow"
    console.log("On")
    flag = 1
    } else {
        bulb.style. backgroundColor = "transparent"
        console.log("Off")
        flag = 0
    }
})