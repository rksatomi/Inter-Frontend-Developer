//var currentNumberWrapper=document.getElementById("currentnumber");
var currentNumberWrapper;
var currentnumber=0;
document.getElementById("currentnumber").addEventListener("decrement", decrement);
document.getElementById("currentnumber").addEventListener("increment", increment);

function increment(){
    if (currentnumber<10){
        currentnumber=currentnumber+1;    
        document.getElementById("currentnumber").innerHTML=currentnumber;
    }

}

function decrement(){
    
    if (currentnumber>0){
        currentnumber=currentnumber-1;
        document.getElementById("currentnumber").innerHTML=currentnumber;
    }
 
}
