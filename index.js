alert(`Cronometro feito para fins educacionas visando o back-end`)

let hora = 0
let min = 0
let sec = 0
let tempo = 1000
let cronometro
function staart(){
    cronometro = setInterval(() => { cronometrar(); }, tempo);/*Funçao que eh executada a cada intervalo*/

}
function stoop(){
    clearInterval(cronometro)/*Usado para saber quem eh que vai parar */

}
function reseet(){
    clearInterval(cronometro)
    
    hora = 0
    min = 0
    sec = 0
    document.getElementById('counter').innerHTML = `00:00:00`;
}

function cronometrar(){
    sec++
    if(sec == 60){
        sec = 0
        min++
        if(min == 60){
            min = 0
            hora++
           
        }
    }





    var format = `${hora <  10 ? '0' + hora:hora}:${min <  10 ? '0' + min:min}:${sec <  10 ? '0' + sec:sec}`
    document.getElementById('counter').innerHTML = format;




}