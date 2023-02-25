import { createRouter, createWebHashHistory } from 'vue-router'
/*
Carga inicial donde se trae todo
import Actualizar from '../pages/Actualizar'
import Insertar from '../pages/Insertar'
import Buscar from '../pages/buscarPorCedula'
import Eliminar from '../pages/Eliminar'
import Inicio from '../pages/Inicio'
import NoFound from '../pages/NoFound'

const routes=[
    {path:'/',component:Inicio},
    {path:'/actualizar',component:Actualizar},
    {path:'/insertar',component:Insertar},
    {path:'/buscar',component:Buscar},
    {path:'/eliminar',component:Eliminar},
    {path:'/:pathMatch(.*)*',component:NoFound}
    
]

*/


/* Carga perezosa donde se trae por demanda */

const routes = [
    {
        path: '/',
        component: ()=> import (/* webpackChunkName: "Inicio" */ '../pages/inicio')
    },
    {
        path: '/actualizar',
        component: ()=> import (/* webpackChunkName: "Actualizar" */ '../pages/Actualizar')
    },
    {
        path: '/insertar',
        component:  ()=> import (/* webpackChunkName: "Insertar" */ '../pages/Insertar')
    },
    {
        path: '/buscar/:idCliente',
        component: ()=> import (/* webpackChunkName: "Buscar" */ '../pages/BuscarPorCedula')
    },
    {
        path: '/eliminar',
        component: ()=> import (/* webpackChunkName: "Eliminar" */ '../pages/Eliminar')
    },
    {
        path: '/:pathMatch(.*)*',
        component: ()=> import (/* webpackChunkName: "NoFound" */ '../pages/NotFound')
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to,from,next)=>{
    console.log({to,from,next})
    const random=Math.random()*10
    if(random>5){
        console.log('Aurotizado')
    }else{
        console.log('No autorizado')
    }





    //para darle aso al recurso que quiere
    next({
        name:'403'
    })
})


export default router