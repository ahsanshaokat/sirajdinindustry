export default {
    async login(request, payload) {
        return request.dispatch('authenticateCredenticals', {
            ...payload, 
            authType: 'login'
       });
    },
    async register(request, payload) {
       return request.dispatch('authenticateCredenticals', {
            ...payload, 
            authType: 'register'
       });
    },
    async authenticateCredenticals(request, payload) {
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
        
    if (!response.ok) {
        return responseData;
      }
      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;
  
      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      await request.commit('setLoggedInUser', {
        token: responseData.idToken,
        userId: responseData.localId
      });

      return responseData;
    },
    logout(request) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

    
        request.commit('setLoggedInUser', {
          token: null,
          userId: null
        });
    },

}