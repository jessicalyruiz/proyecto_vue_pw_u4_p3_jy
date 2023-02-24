
import axios from "axios";
//metodos fachada
export const obtenerClientePorCedulaFachada=async(cedula)=>{
    return  await obtenerClientePorCedula(cedula);
}
export const insertarFachada=async(body)=>{
 insertar(body)
}
export const actualizarFachada=(id,body)=>{

}
export const buscarTodosFachada=(id)=>{

}

export const borrarPorIdFachada=(id)=>{

}
export const borrarPorCedulaFachada=(cedula)=>{

}

//metodos de consumo
//crud

const obtenerClientePorCedula=async(cedula)=>{
   const datos=axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/${cedula}`).then(r=>r.data)
   console.log(datos)
   //console.log("apellido"+apellido)
   //console.log(cedula)
   return datos
}
const insertar=async(body)=>{
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`,body).then(r=>r.data)

}

const actualizar=(id,body)=>{
    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes`,body).then(r=>r.data)

}

const borrarPorId=(id)=>{
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`,body).then(r=>r.data)

}
const borrarPorCedula=()=>{

}