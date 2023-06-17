export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        if(localStorage.getItem('token')) {
            return true;
        }
        return !!state.token;
    },
    isLogout(state) {
        return state.isLogout;
    },
    async getUsers(state) {
        let _URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDO3JclBRRwgmGwVjFiYgqqVsTsUKzUiGM';
        if(payload.authType === 'login') {
            _URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDO3JclBRRwgmGwVjFiYgqqVsTsUKzUiGM';
        }

        const response = await fetch(_URL, {
            method: 'POST', 
            body: JSON.stringify({
                email: payload.email,
                password: payload.password, 
                displayName: payload.displayName? payload.displayName: '', 
                returnSecureToken: true
            })
        })

        const responseData = await response.json();
    }
}