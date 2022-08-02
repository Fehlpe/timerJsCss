let check;
let numero = 1;
let contadorResume=0, contadorStop=0, contadorStart=0;

function contador() {
    if(contadorStart<1){
        timer();
        contadorStart++
    }
}

function timer() {
    if(contadorResume<=contadorStop){
        check = false;
        if(!check){
            check = setInterval(start, 1000);
        } 
    } 
}

function start() {
    document.getElementById('count').innerText=numero;
    return numero++;
}

function stop() {
    clearInterval(check);
    nIntervID = null;
    check=true;
    if(contadorStop===contadorResume){
        contadorStop++;
    }
}

function resume() {
    if(contadorResume<contadorStop){
        contadorResume++;
        timer();
    }
}

function reset(){
    clearInterval(check);
    nIntervID = null;
    document.getElementById('count').innerText=0;
    contadorStart = 0;
    numero=1;
}