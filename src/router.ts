import { createRouter } from 'router-vue-native'
import Home from './components/Home.vue'
import Details from './components/Details.vue'

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/details',
        component: Details,
    }
]


export default createRouter({ routes })
