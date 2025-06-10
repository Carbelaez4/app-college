export async function consultarUsuarios(){

    //1. URL del servicioque quiero consumir (endpoint)
    const URL="http://localhost:8080/api/users"


    //2. Configuracion de la peticion (Que metodo HTTP se va a consumir)
    // Que cabeceras se necesitan
    // Si aplica que datos van en el body
    const PETICION = {
        method:"GET"

    }


    //3. Utilizar una promesa (fetch) para consumir el API
    let respuestaAPI=await fetch(URL,PETICION)
    let usuariosConsultados=await respuestaAPI.json()
    return usuariosConsultados
    

}

export async function agregarUsuario(datosUsuario) {

    const URL="http://localhost:8080/api/users"
    const PETICION = {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(datosUsuario)
    }  
    let respuestaAPI=await fetch(URL,PETICION)
    let respuestaFinal=await respuestaAPI.json()
    return respuestaFinal

}


export async function buscarUsuarioPorId(id) {

    const URL="http://localhost:8090/users/"+id
    const PETICION = {
        method:"GET",
       
    }  
    let respuestaAPI=await fetch(URL,PETICION)
    let respuestaFinal=await respuestaAPI.json()
    return respuestaFinal

}