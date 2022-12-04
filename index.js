// alert("hola");

let jugador = 1;
let parada = 9;

let alerta = `<div class="alert alert-danger" role="alert">
La posicion ya esta ocupada!
</div>`;
let imprimir_X =`<td  scope="col" class="border-end position-relative texto_none"><img class="position-absolute top-50 start-50 translate-middle" src="img/close.png" alt="">x</td>`;
let imprimir_O =`<td  scope="col" class="border-end position-relative texto_none"><img class="position-absolute top-50 start-50 translate-middle" src="img/o.png" alt="">o</td>`;


let p1 = document.querySelectorAll('td');
console.log( p1)


for(let i = 0; i<parada; i++){
    p1[i].addEventListener('click', function (){
        if(jugador==1){
             //img x
             if(p1[i].textContent!="c"){
                document.getElementById("alerta").innerHTML=alerta;
                setTimeout(()=>{
                    document.getElementById("alerta").innerHTML="";
                },1000)
                
                parada++;
                
             }else{
                p1[i].innerHTML=imprimir_X;
                jugador=2
             }
           
        }else if(jugador==2){
            //img O
            if(p1[i].textContent!="c"){
                document.getElementById("alerta").innerHTML=alerta;
                setTimeout(()=>{
                    document.getElementById("alerta").innerHTML="";
                },1000)
                parada++;
             }else{
                p1[i].innerHTML=imprimir_O;
                jugador=1
             }
        }
        p1 = document.querySelectorAll('td');
        if(p1[0].textContent=="x" && p1[1].textContent=="x" && p1[2].textContent=="x"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[3].textContent=="x" && p1[4].textContent=="x" && p1[5].textContent=="x"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[6].textContent=="x" && p1[7].textContent=="x" && p1[8].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent=="x" && p1[3].textContent=="x" && p1[6].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[1].textContent=="x" && p1[4].textContent=="x" && p1[7].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[2].textContent=="x" && p1[5].textContent=="x" && p1[8].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent=="x" && p1[4].textContent=="x" && p1[8].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[2].textContent=="x" && p1[4].textContent=="x" && p1[6].textContent=="x"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent=="o" && p1[1].textContent=="o" && p1[2].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[3].textContent=="o" && p1[4].textContent=="o" && p1[5].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[6].textContent=="o" && p1[7].textContent=="o" && p1[8].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent=="o" && p1[3].textContent=="o" && p1[6].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[1].textContent=="o" && p1[4].textContent=="o" && p1[7].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[2].textContent=="o" && p1[5].textContent=="o" && p1[8].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent=="o" && p1[4].textContent=="o" && p1[8].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[2].textContent=="o" && p1[4].textContent=="o" && p1[6].textContent=="o"){
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: '<b>gano el jugador '+jugador+'</b>',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        }else if(p1[0].textContent!="c" && p1[1].textContent!="c" && p1[2].textContent!="c" && p1[3].textContent!="c" && p1[4].textContent!="c" && p1[5].textContent!="c" && p1[6].textContent!="c" && p1[7].textContent!="c" && p1[8].textContent!="c"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se acabo el juego !',
                footer: 'Empate',
                allowOutsideClick: false,
                showConfirmButton: false,
              })
              setTimeout(()=>{
                location.reload();
                },3000)
        } 
    });
   
 
}
