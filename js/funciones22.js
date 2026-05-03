export const SalidaTexto = (entrada, salida) =>{
    if (entrada.value.trim()==""){
        salida.innerText = "--------";        
    } else{
        salida.innerText = entrada.value;
    }
};