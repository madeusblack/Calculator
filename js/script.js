let initNmbr=[];
let operator1=0;
let operator2=0;
let addToOperation=[];
let opToDo="";
let finalres=0;
let coma="."
function backspace(){
    initNmbr.pop()
    placeInTheCalc(initNmbr)
}
function placeInTheCalc(addtocalc){
    operator1=addtocalc.join("")
    let initNmbrjoined=document.getElementById("res")   
    initNmbrjoined.innerHTML=operator1
}
function addtonumber(numbertoadd){
    initNmbr.push(numbertoadd) 
    placeInTheCalc(initNmbr)
}
function sum(){
    opToDo="+"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    document.getElementById("com").disabled = false;
}
function res(){
    opToDo="-"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    document.getElementById("com").disabled = false;
}
function mult(){
    opToDo="*"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    document.getElementById("com").disabled = false;
}
function div(){
    opToDo="/"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
}
function clone(op1){
    operator2=op1
}
function cleared() {
    operator1=0
    initNmbr=[]
    let clean=document.getElementById("res");
    clean.innerHTML=operator1;
}
function allcleared() {
    operator1=0
    initNmbr=[]
    operator2=0;
    addToOperation=[];
    opToDo="";
    let clean=document.getElementById("res");
    clean.innerHTML=operator1;
}
function result(oper1,oper2,todo){
    if(oper1===""){
        oper1=0
    }
    if(oper2===""){
        oper2=0
    }
    let noper1=parseFloat(oper1)
    let noper2=parseFloat(oper2)
    clone(operator1);
    operator1=null;
    initNmbr=[]
    switch(todo){
        case "+":{
            finres=noper1+noper2
            let showRes=document.getElementById("res");
            showRes.innerHTML=finres;
            break;
        }
        case "-":{

            finres=noper1-noper2
            let showRe2=document.getElementById("res");
            showRe2.innerHTML=finres;
            break;
        }
        case "*":{

            finres=noper1*noper2
            let finres2=Math.round(finres* 1000000) / 1000000
            let showRe3=document.getElementById("res");
            showRe3.innerHTML=finres2;
            break;
        }
        case "/":{
            if(noper1===0){
                alert("woa woa woa , calm down, i am just a browser if you want to try new things in math please go to mathlab or something like that, i can't divide by 0, i can barely show you decimals   :c")
                break;}
            finres=noper2/noper1
            let finres1=Math.round(finres* 1000000) / 1000000
            let showRe4=document.getElementById("res");
            showRe4.innerHTML=finres1;
            break;
        }
    }
    opToDo=""
    operator1=finres
    operator2=null
    document.getElementById("com").disabled = false;
}
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    console.log(e)
    switch (e.key) {
        case "-":{
            res()
        }      
            break;
        case "a":{
            allcleared()
        }
            break;
    
        case "c":{
                cleared()
            }    
            break;
    
        case "Backspace":{
                backspace()
            }                
            break;
        case "1":{
                addtonumber(1)
            }    
            break;
            
        case "2":{
                addtonumber(2)
            }                
            break;
        case "3":{
                addtonumber(3)
            }    
            break;
            
        case "4":{
                addtonumber(4)
            }                
            break;
        case "5":{
                addtonumber(5)
            }    
            break;
            
        case "6":{
                addtonumber(6)
            }                
            break;
        case "7":{
                addtonumber(7)
            }    
            break;
            
        case "8":{
                addtonumber(8)
            }                
            break;
        case "9":{
                addtonumber(9)
            }    
            break;
            
        case "0":{
                addtonumber(0)
            }                
            break;
        case "7":{
                addtonumber(7)
            }    
            break;
            
        case "8":{
                addtonumber(8)
            }                
            break;
        case "9":{
                addtonumber(9)
            }    
            break;
            
        case "+":{
                sum()
            }                
            break;
        case "*":{
                mult()
            }                
            break;
        case "/":{
                div()
            }                
            break;
        case "=":{
            result(operator1,operator2,opToDo)
            }                
            break;
        case "Enter":{
            result(operator1,operator2,opToDo)
            }                
            break;
        case ",":{
            checkcoma()
            }                
            break;
        case ".":{
            checkcoma()
            }                
            break;
    }
}
function checkcoma(){
    if(initNmbr.includes(".")===true){
        return 
    }
    else{
        addtonumber(coma)
    }
}
