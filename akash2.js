let pass = document.querySelector("input")
let check = document.querySelector("button")
check.addEventListener("click",function(){
    if(pass.value == "ankit123"){
        alert("Hii, Ankit")
        document.body.style.backgroundColor = "Green"
        console.log("Hii, Ankit")
    } else if(pass.value == "akash123"){
        alert("Hii, Boss ")
        document.body.style.backgroundColor = "RoyalBlue"
        console.log("Hii, Akash")
    } else if( pass.value == "neeraj123"){
        alert("Hii, Neeraj")
        document.body.style.backgroundColor = "Green"
        console.log("Hii, Neeraj")
    } else {
        alert("Bhaag Jao")
        document.body.style.backgroundColor = "Red"
        console.log("Who are You..???")
    }
})

