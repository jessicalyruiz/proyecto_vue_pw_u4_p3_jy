<template>
  <h1>Eliminar</h1>

  <h3>id</h3>
  <input v-model="id" type="text">
    <button v-on:click="eliminarCliente">Eliminar</button>
   
</template>

<script>
export default {
    data(){
        return{
            id:null,
           
    }
    },
    methods:{
        consultarCliente(){
           const cliente= obtenerClientePorCedulaFachada(this.cedula)
           console.log(cliente.nombre)
        },
        eliminarCliente(){
            const miCliente={
                apellido:"ysdanez",
                nombre: "jessidsca",
                cedula:"1700",
                fechaNacimiento:"1992-06-24",
                genero:"F",
                email:"jasd@gmailcom"
            
        }
        
    }}

}
</script>

<style>

</style>