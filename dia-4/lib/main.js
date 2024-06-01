let numero = document.getElementById("numero")
let form = document.getElementById("btn")
let contador = document.getElementById("contador")
let num2 = 3


const num = Math.floor(Math.random() * (10 - 0 + 1) + 0)
console.log (num)
console.log(form)


form.addEventListener('click', function(e){
        e.preventDefault()
    
        if (numero.value == num){
            window.location.reload()
        }

        InputForm()

        contadorDeTentativas()


        console.log(numero.value)
    })

function InputForm(){
        
    let numeroResultado = numero.value

    const msg = `Tente novamente`

    if (numeroResultado == num){
        alert("parabéns, você acertou")
    } else if (num2 > 1){
        alert(msg)
    } else {

    }


    numero.value=""
}

function contadorDeTentativas(){
    num2 = num2 - 1

    contador.innerHTML = `<p>Número de tentativas: ${num2} </p>`

    if (num2 == 0) {
        alert('Acabou as suas tentativas')
        document.getElementById("btn").disabled=true;
    } 
}
