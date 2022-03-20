import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import appSearchPage from '../views/AppSearchPage.vue';
import appDetailsPage from '../views/AppDetailsPage.vue'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'search',
            component: appSearchPage
        },
        {
            path: '/book',
            name: 'book',
            component: appDetailsPage
        }
    ]
})

export default router