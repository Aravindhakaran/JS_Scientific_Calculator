let result = document.getElementById("inputtext");

let calculator=(number)=>{
result.value = result.value+number;
console.log(calculator);

}
let Result=()=>{
try{
    result.value = eval(result.value);
}
catch(err){
    alert("the input value not valid");
}
}
function clr(){
    result.value ="";
}
function del(){
    result.value = result.value.slice(0,-1);
}
function sin(){
    result.value = Math.sin(result.value);
}
function cos(){
    result.value = Math.cos(result.value);
}
function tan(){
    result.value = Math.tan(result.value);
}
function pow(){
    result.value = Math.pow(result.value,2);
}
function log(){
    result.value = Math.log(result)
}
function pi(){
    result.value = Math.PI;
}
function e(){
    result.value =Math.E;
}
function sqrt(){
    result.value = Math.sqrt(result.value,2);
}
function fact(){
    let i, number, f;

    f=1
    
    number = result.value;
    for(i=1; i<=number; i++)
    {
        f=f*i;
    }
   // i=i-1;
    result.value = f;
}
