<template>
  <h1>Actualizar</h1>
  <h3>apellido</h3>
  <input v-model="apellido" type="text">
  <h3>nombre</h3>
  <input v-model="nombre" type="text">
  <h3>cedula</h3>
  <input v-model="cedula" type="text">
  <h3>genero</h3>
  <input v-model="genero" type="text">
    <button v-on:click="consultarCliente">Actualizar</button>
   
</template>

<script>
export default {
    data(){
        return{
            apellido:null,
            nombre:null,
        cedula:null,
        genero:null
    }
    },
    methods:{
        consultarCliente(){
           const cliente= obtenerClientePorCedulaFachada(this.cedula)
           console.log(cliente.nombre)
        },
        insertar(){
            const miCliente={
                apellido:"ysdanez",
                nombre: "jessidsca",
                cedula:"1700",
                fechaNacimiento:"1992-06-24",
                genero:"F",
                email:"jasd@gmailcom"
            
        }
        insertarFachada(miCliente);
    }}
}
</script>

<style>

</style>