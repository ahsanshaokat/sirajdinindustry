import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    state() {
        return { 
         userId: null,
         authToken: null,
         isLogout: false
        }
     },
     actions,
     mutations,
     getters
}