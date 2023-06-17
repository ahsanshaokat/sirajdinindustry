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
                      <h3>Register an account</h3>
                    </div>
                    <alert class="text-red-500">{{  isError? errorMessage: '' }}</alert>
                    <form @submit.prevent="signupFormSubmit">
                      <div class="relative w-full mb-3 pb-3">
                        <input-field
                          :input-label="nameLabel"
                          :input-name="name"
                          :input-type="nameType"
                          :is-required="true"
                          @input-data="getDisplayName"
                          style="transition: all 0.15s ease 0s;"
                        />
                      </div>
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
                            Create new account
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
              nameValue:'',
              nameType: 'text',
              name: 'displayName',
              nameLabel: 'Full name',
              emailValue:'',
              emailType: 'email',
              emailName: 'email',
              emailLabel: 'Email',
              passwordValue: '',
              passwordType: 'password',
              passwordName: 'password',
              passwordLabel: 'Password',
              isError: false,
              errorMessage: ''
          }
      },
      methods: {
          getEmail(inputValue) {
            this.emailValue = inputValue;
          },
          getPassword(inputValue) {
            this.passwordValue = inputValue;
          },
          getDisplayName(inputValue) {
            this.nameValue = inputValue;
          },
          async signupFormSubmit() {
              const payloadData = {
                email: this.emailValue, 
                password: this.passwordValue,
                displayName: this.nameValue
              }
              const responseData = await this.$store.dispatch('register', payloadData);
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
  