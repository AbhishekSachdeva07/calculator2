let a = document.getElementById("text");
function addtovalue(value){
    a.value+=value;
}
function calculate(operator){
    let ex=a.value;
    if (operator==="%"){
        a.value=eval(ex)/100;
    }
    if(operator==="="){
        a.value=eval(ex);
    }
    else{
        a.value+=operator;
    }

}
function clearresult(){
    a.value="";
}
