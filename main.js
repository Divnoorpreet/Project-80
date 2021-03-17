var inputs=[]
for (var i=1; i<=6;i++){
    inputs.push(document.getElementById("" + i).value);
}
inputs.join(". ")
function para(){
  document.getElementById(Getpara).innerHTML=inputs.join(". ")  
  console.log(inputs)
}