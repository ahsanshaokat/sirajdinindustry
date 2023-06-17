import { createStore } from 'vuex';
import authenticationModule from './authentication/index';
import productModule from './products/index';

const store = createStore({
    modules: {
        authentications: authenticationModule,
        products: productModule
    }
})

export default store;