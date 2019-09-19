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
    console.log(operator2);
}
function res(){
    opToDo="-"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    console.log(operator2);
}
function mult(){
    opToDo="*"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    console.log(operator2);
}
function div(){
    opToDo="/"
    clone(operator1);
    operator1=null;
    initNmbr=[];
    let strtNwOp=document.getElementById("res");
    strtNwOp.innerHTML=operator1;
    console.log(operator2);
}
function clone(op1){
    operator2=op1
}
function cleared() {
    console.log("start clear")
    operator1=0
    initNmbr=[]
    let clean=document.getElementById("res");
    clean.innerHTML=operator1;
    console.log( operator1)
}
function allcleared() {
    console.log("start clear")
    operator1=0
    initNmbr=[]
    operator2=0;
    addToOperation=[];
    opToDo="";
    let clean=document.getElementById("res");
    clean.innerHTML=operator1;
    console.log( operator1)
    console.log( operator2)
    console.log( initNmbr)
    console.log( "todo="+opToDo)



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
        
        

    }opToDo=""
    operator1=finres
    operator2=null
    console.log("op1"+operator2)
    console.log("op2 "+operator1)
     
}
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
 let keyCoded = e.keyCode;
    switch (keyCoded) {
        case 65:{
            allcleared()
        }
        break;

        case 67:{
            cleared()
        }    
        break;

        case 8:{
            backspace()
        }                
        break;
        case 49:{
            addtonumber(1)
        }    
        break;
        
        case 50:{
            addtonumber(2)
        }                
        break;
        case 51:{
            addtonumber(3)
        }    
        break;
        
        case 52:{
            addtonumber(4)
        }                
        break;
        case 53:{
            addtonumber(5)
        }    
        break;
        
        case 54:{
            addtonumber(6)
        }                
        break;
        case 55:{
            addtonumber(7)
        }    
        break;
        
        case 56:{
            addtonumber(8)
        }                
        break;
        case 57:{
            addtonumber(9)
        }    
        break;
        
        case 48:{
            addtonumber(0)
        }                
        break;
    }
}
