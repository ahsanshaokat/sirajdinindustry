export default {
    setLoggedInUser(state, payload) {
        console.log('setLoggedInUser', payload)
        state.userId = payload.userId;
        state.token = payload.token;
        state.isLogout = false;
    },
    setLogout(state) {
        state.isLogout = true;
    }
}