
let screenEL=document.getElementById("screen")
let screen2EL=document.getElementById("screen2")
let homecount = 0
let guestcount=0


function homeincrement(){
homecount  += 1
screenEL.innerText=homecount
}
homeincrement()


function homeincrement2(){
   homecount  += 2
    screenEL.innerText =homecount
}
homeincrement2()



function homeincrement3(){
    homecount  += 3
    screenEL.innerText =homecount
}
homeincrement3()


function guestincrement() {
guestcount += 1
screen2EL.innerText=guestcount
}
guestincrement()

function guestincrement2() {
    guestcount += 2
    screen2EL.innerText=guestcount
    }
    guestincrement2()

function guestincrement3() {
        guestcount += 3
        screen2EL.innerText=guestcount
        }
        guestincrement3()





 function newstart(){
 
    homecount = 0
    guestcount = 0
    screenEL.innerText = homecount
    screen2EL.innerText = guestcount
    
 }
 newstart()