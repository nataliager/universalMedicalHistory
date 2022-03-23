import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import LogIn from './components/LogIn.vue' /*importar los componentes*/
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Patients from './components/Patients.vue'
import Entities from './components/Entities.vue'
import CreatePatient from './components/CreatePatient.vue'
import CreateEntity from './components/CreateEntity.vue'
import Hc from './components/Hc.vue'
import CreateHc from './components/CreateHc.vue'
import gql from "graphql-tag"

const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/logIn',
        name: "logIn",
        component: LogIn,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/home',
        name: "home",
        component: Home,
        meta: { requiresAuth: false }
    },
    {
        path: '/Registrarse',
        name: "signUp",
        component: SignUp,
        meta: { requiresAuth: false }
    },
    {
        path: '/Patients',
        name: "patients",
        component: Patients,
        meta: { requiresAuth: false }
    },
    {
        path: '/Entities',
        name: "Entities",
        component: Entities,
        meta: { requiresAuth: false }
    },
    {
        path: '/createPatient',
        name: "createPatient",
        component: CreatePatient,
        meta: { requiresAuth: false }
    },
    {
        path: '/createEntity',
        name: "createEntity",
        component: CreateEntity,
        meta: { requiresAuth: false }
    },
    {
        path: '/hc',
        name: "hc",
        component: Hc,
        meta: { requiresAuth: false }
    },
    {
        path: '/createHc',
        name: "createHc",
        component: CreateHc,
        meta: { requiresAuth: false }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const apolloClient = new ApolloClient({
    link: createHttpLink({ uri: 'https://api-gateway-umh.herokuapp.com/' }),
    cache: new InMemoryCache()
})

async function isAuth() {
    console.log('error');
    if (localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null) {
        return false;
    }
    try {
        var result = await apolloClient.mutate({
            mutation: gql `
            mutation ($refresh: String!) {
                refreshToken(refresh: $refresh) {
                    access
                }
            }
            `,
            variables: {
                refresh: localStorage.getItem("token_refresh"),
            },
        })
        localStorage.setItem("token_access", result.data.refreshToken.access);
        return true;
    } catch (e) {
        console.log(e);
        //localStorage.clear();
        alert("Su sesión expiró, por favor vuelva a iniciar sesión");
        return false;
    }
}
router.beforeEach(async(to, from) => {
    if (to.meta.requiresAuth) {
        var is_auth = await isAuth();
        if (is_auth) {
            return true
        } else {
            return { name: "logIn" };
        }
    } else {
        return true
    }
})


export default router;