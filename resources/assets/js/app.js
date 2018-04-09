
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/ExampleComponent.vue'));
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);
import customers from './components/CustomersComponent.vue';
import CustomerCreate from './components/CustomersCreateComponent.vue';
import CustomerEdit from './components/CustomersEditComponent.vue';

const routes = [
    {
        path: '/',
        components: {
            customersIndex: customers
        }
    },
    {path: '/customers/create', component: CustomerCreate, name: 'createCustomer'},
    {path: '/customers/edit/:id', component: CustomerEdit, name: 'editCustomer'},
];



const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app');
