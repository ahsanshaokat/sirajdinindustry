import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Authentication/Login.vue';
import Register from './components/Authentication/Register.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import WebHome from './components/website/Home.vue';
import Index from './components/website/Index.vue';
import Home from './components/dashboard/Home.vue';
import UsersList from './components/users/UsersList.vue';
import Product from './components/products/Product.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home/index' },
    { path: '/dashboard', 
        component: Dashboard,
        meta: {
            requiresUnauth: false
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'users-list',
                name: 'users_list',
                component: UsersList
            },
            {
                path: 'products',
                name: 'products_list',
                component: Product
            },
        ] 
    },
    { path: '/home', 
      component: WebHome, meta: {
        isLoggedIn: true,
      },
      children: [
        {
            path: 'index',
            name: 'index',
            component: Index
        },
      ] 
    },
    { path: '/login', 
            component: Login, 
            meta: {
                isLoggedIn: true,
            } },
    { path: '/sign-up', 
            component: Register, 
            meta: {
                isLoggedIn: true,
            }  },
  ]
});

router.beforeEach(function(to, _, next) {
    if (!to.meta.isLoggedIn && !store.getters.isAuthenticated) {
      next('/home/index');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
      next('/dashboard/home');
    } else {
      next();
    }
  });

export default router;
