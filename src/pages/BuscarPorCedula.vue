<template>
  <h1>Buscar por cedula</h1>
  <input v-model="cedula" type="text">
    <button v-on:click="consultarCliente">Consultar</button>
    <button v-on:click="insertar">Insertar</button>

    <h2>{{ id }}</h2>

    <button  v-on:click="procesar">Procesar</button>
</template>

<script>
import {obtenerClientePorCedulaFachada,insertarFachada} from "../js/api_facturacion/ProcesarCliente.js"


export default {
    data(){
        return{
        cedula:null,
        id:null
    }
    },
    mounted(){
        console.log('entro a buscar')
        console.log(this.$router)
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
    },

    procesar(){
        console.log(this.id)
    }}
}
</script>

<style>

</style>