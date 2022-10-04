let result = document.querySelector('.results');
// result.style.display="none";
var mainBox = document.getElementById('box-container');

// making boxes
    for(let i=0;i<9;i++){
        var box = document.createElement('div');
        box.setAttribute('class','box')
        box.setAttribute('id',`${i}`);
        mainBox.appendChild(box);
    }

let boxes = document.getElementsByClassName('box'); 

// winning function

const checkWin = ( )=>{
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if((boxes[e[0]].innerText===boxes[e[1]].innerText) && (boxes[e[2]].innerText===boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "")){
            document.getElementById('win').innerText = boxes[e[0]].innerText + " won"
            // result.style.display="inline"
        }
    })
}

let count = 0 ;

// printing values in boxes
mainBox.addEventListener('click',function(event){
    if(document.getElementById(event.target.id).innerHTML==''){
        if(count%2==0){
            document.getElementById(event.target.id).innerHTML='0';
            
        }else{
            document.getElementById(event.target.id).innerHTML='X';
           
        }
        count++;
        checkWin();
    }
    
})


//reset function on click
let reset = document.getElementById("reset")
reset.addEventListener('click', ()=>{
    // console.log(Array.from(boxes) );
    Array.from(boxes).forEach((element)=>{
        element.innerText = ""
    }) 
    document.getElementById('win').innerText=""; 
    count=0;
})

