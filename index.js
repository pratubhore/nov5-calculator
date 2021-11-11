let num1='';
let num2='';
let operation='';

const calc= e =>{
    if(operation==''){
        num1+=e.target.dataset.number
        display(num1)
    }
    else{
        num2+=e.target.dataset.number
        display(num2)
    }
}

function display(val){
    var disp_box=document.getElementById('disp-box')
        disp_box.value=val
}

function add(){
    operation='+'
}
function sub(){
    operation='-'
}
function product(){
    operation='*'
}
function divide(){
    operation='/'
}

function answer(){
    if(operation=='+'){
        const ans=Number(num1)+Number(num2)
        display(ans)
    }
    else if(operation=='-'){
        const ans=Number(num1)-Number(num2)
        display(ans)
    }
    else if(operation=='*'){
        const ans=Number(num1)*Number(num2)
        display(ans)
    }
    else if(operation=='/'){
        const ans=Number(num1)/Number(num2)
        display(ans)
    }
operation=''
}

function reset(){
    location.reload();
}

document.getElementById('answer').addEventListener('click',answer)


document.getElementById('plus-operation').addEventListener('click',add)


document.getElementById('sub').addEventListener('click',sub)


document.getElementById('product').addEventListener('click',product)


document.getElementById('divide').addEventListener('click',divide)


document.getElementById('reset').addEventListener('click',reset)

let a=document.querySelectorAll('.btn_number');
a.forEach(action =>{
    action.addEventListener('click',calc)
}) 