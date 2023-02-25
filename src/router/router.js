import { createRouter, createWebHashHistory } from 'vue-router'

/*Carga q trae todo

//importar los componentes q quiero declarar como paginas
import  Actualizar from '../pages/Actualizar'
import  Buscar from '../pages/BuscarPorCedula'
import  Insertar from '../pages/Insertar'
import  Eliminar from '../pages/Eliminar'
import Inicio from '../pages/inicio'
import NotFound from '../pages/NotFound'

const routes=[
    {path:'/',component:Inicio},
    {path:'/actualizar',component:Actualizar},
    {path:'/buscar',component:Buscar},
    {path:'/insertar',component:Insertar},
    {path:'/eliminar',component:Eliminar},
    {path:'/:pathMatch(.*)*',component:NotFound},
]

*/

/*carga perezosa q trae bajo demanda*/

const routes = [
    {
        path: '/',
        component: () => import(/*webpackChunkName: "Inicio"*/ '../pages/Inicio')
    },
    {
        path: '/actualizar',
        component: () => import(/*webpackChunkName: "Actualizar"*/ '../pages/Actualizar')
    },
    {
        path: '/buscar',
        component: () => import(/*webpackChunkName: "Buscar"*/ '../pages/BuscarPorCedula')
    },
    {
        path: '/insertar',
        component:  () => import(/*webpackChunkName: "Insertar"*/ '../pages/Insertar')
    },
    {
        path: '/eliminar',
        component:  () => import(/*webpackChunkName: "Eliminar"*/ '../pages/Eliminar')
    },
    {
        path: '/:pathMatch(.*)*',
        component:  () => import(/*webpackChunkName: "NotFound"*/ '../pages/NotFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

export default router