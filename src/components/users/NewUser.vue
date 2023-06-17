<template>
                <app-modal 
                        title="Add User Details"
                        btn-title="New User"
                        >
                        <template v-slot:modal-body>
                            <div class="relative w-full mb-3 pb-3">
                                <alert class="text-red-500 pull-left" v-if="isError">{{  isError? errorMessage: '' }}</alert>
                                <alert class="text-green-500 pull-left" v-if="!isError && isSuccess">{{  isSuccess? errorMessage: '' }}</alert>
                            </div>
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
                            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="reset">
                                Reset
                            </button>
                            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                                Save Changes
                            </button>
                        </form>
                        </template>
                    </app-modal>
</template>

<script>
import AppModal from '../UI/elements/AppModal.vue';
import InputField from '../UI/elements/InputField.vue';
export default {
    components: {
        AppModal,
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
            errorMessage: '',
            isSuccess: false,
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
                this.isSuccess = true;
                this.errorMessage = "User has been registered successfully!"
              }

          }
      }

}
</script>

<style scoped>
</style>