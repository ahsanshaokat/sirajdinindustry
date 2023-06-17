<script>
import Loader from './components/UI/elements/Loader.vue';
export default {
    components: {
      Loader
    },
    data() {
      return {
        isLoggedInUser: false,
        quickLoggedInCheck: false
      }
    },
    mounted() {
      this.isLoggedInUser = this.isLoggedIn();
    },
    methods: {
      isLoggedIn() {
            this.isLoggedInUser = this.$store.getters.isAuthenticated;
            return this.$store.getters.isAuthenticated;
        },
    }
}

</script>

<template>
  <app-header v-if="$route.meta.isLoggedIn"></app-header>

  <router-view></router-view>

  <app-footer v-if="$route.meta.isLoggedIn"></app-footer>
</template>

<style scoped>
</style>
