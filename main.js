document.addEventListener("DOMContentLoaded",() =>{
    const FormInfo = document.getElementById("form_info");
    FormInfo.addEventListener('submit',function(event){
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        alert(nombre)
        alert(email)
        alert(mensaje)
    })
})
