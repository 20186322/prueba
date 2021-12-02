const no = document.getElementById("name")
const ap = document.getElementById("email")
const tel = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(no.value.length <2){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(ap.value.length < 2){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(tel.value.length < 10){
        warnings += `La telefono no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Se guardaron los datos correctamente."
    }
})