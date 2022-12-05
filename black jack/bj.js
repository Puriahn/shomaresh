let s=0
let ca=[]
let isalive=false
let iswinner=false
let message=" "
let m=document.getElementById("ss")
message=document.getElementById("aa")
let cardsel=document.getElementById("cards-el")
let player = {
    name: "Puria",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function get(){
    let g=Math.floor(Math.random()*13)+1
    if(g>10){
        return 10
    }
    if(g===1){
        return 11
    }
    return g
}
function start(){
    let c=get()
    let cc=get()
    isalive=true
    s=c+cc
    ca=[c,cc]
    render()

}
function render(){
    m.textContent="Sum: " + s
    cardsel.textContent="Cards: "
    for(let i=0;i<ca.length;i++){
        cardsel.textContent += ca[i] + "-"
    }
    if(s>21){
        message.textContent="u loose"
        isalive=false
    }
     else if(s===21){
            message.textContent="u win"
            iswinner=true
    }
        else{
     message.textContent="do u want another card?"
    }
}
function neww(){
    if(isalive===true&&iswinner===false){
        let ccc=get()
        ca.push(ccc)
        s+=ccc
        render()
    }
}



