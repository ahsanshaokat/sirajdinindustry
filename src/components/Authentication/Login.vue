<template>  
  <section class="w-full h-full">
        <div class="container mx-auto px-4 h-full app-login">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >
                <div class="flex-auto px-4 lg:px-10 py-10">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <h3>Sign in with credentials</h3>
                  </div>
                  <form @submit.prevent="loginFormSubmit">
                    <div class="relative w-full mb-3 pb-3">
                      <input-field
                        :input-label="emailLabel"
                        :input-name="emailName"
                        :input-type="emailType"
                        :is-required="true"
                        @input-data="getEmail"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <input-field
                        :input-label="passwordLabel"
                        :input-name="passwordName"
                        :input-type="passwordType"
                        :is-required="true"
                        @input-data="getPassword"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Sign In
                      </button>
                
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import InputField from '../UI/elements/InputField.vue';

export default {
    components: {
        InputField
    },
    data() {
        return {
            emailValue:'',
            emailType: 'email',
            emailName: 'email',
            emailLabel: 'Email',
            passwordValue: '',
            passwordType: 'password',
            passwordName: 'password',
            passwordLabel: 'Password',
        }
    },
    methods: {
        getEmail(inputValue) {
          this.emailValue = inputValue;
        },
        getPassword(inputValue) {
          this.passwordValue = inputValue;
        },
        async loginFormSubmit() {
            const payloadData = {
              email: this.emailValue,
              password: this.passwordValue
            }

            const responseData = await this.$store.dispatch('login', payloadData);
            if(responseData.error) {
                this.isError = true;
                this.errorMessage = responseData.error.message;
              } else {
                const redirectUrl = '/' + (this.$route.query.redirect || 'dashboard/home');
                this.$router.replace(redirectUrl);
              }
        }
    }
}

</script>

<style scoped>
.app-login {
    padding: 30px;
}
</style>
