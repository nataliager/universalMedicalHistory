import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeicons/primeicons.css';

import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

import { setContext } from 'apollo-link-context'
const httpLink = createHttpLink({
    uri: 'https://api-gateway-umh.herokuapp.com/',
})
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,

        }
    }
})
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})
const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})
createApp(App).use(router).use(apolloProvider).use(PrimeVue).mount('#app')