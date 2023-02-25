<template > 
<div> <!--<a href="/">Home</a> <a href="/buscar">Buscar</a> <a href="/insertar">Insertar</a> <a href="/actualizar">Actualizar</a> <a href="/borrar">Borrar</a> -->
 <router-link to="/">Home</router-link> <router-link to="/buscar">Buscar</router-link> 
 <router-link to="/insertar">Insertar</router-link> <router-link to="/actualizar">Actualizar</router-link> 
 <router-link to="/borrar">Borrar</router-link> </div> </template> <script> export default { } 
 </script> <!--Scoped, estilos que se van a aplicar solo en el componente, no se va a usar en otra parte--> 
 <style scoped> 
 div a { 
    color: blue; 
    margin: 0 15px; 
    font-weight: bold; } 
</style>