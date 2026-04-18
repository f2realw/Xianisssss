    
function checkinput(){
let userAnswer = document.getElementById("inputFIRST").value.trim();
let userAnswer1 = document.getElementById("inputLAST").value.trim();

if (userAnswer ==="Xian" && userAnswer1 ==="Zhang"){ 
    console.log("Correct input!");
document.getElementById("Me_car").style.right = "0px";
} else {
    alert("Wrong input!");
}

}
    
