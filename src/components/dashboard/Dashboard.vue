<template>
    <div>
    <sidebar-component v-if="isLoggedInUser"></sidebar-component>
    <div class="relative md:ml-64 bg-blueGray-100">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div>
                <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        
      </div>
    </div>
</div>
</template>

<script>
import SidebarComponent from '../UI/Sidebar.vue';
import NavbarComponent from "../UI/Navbar.vue";

export default {
    components: {
        SidebarComponent,
        NavbarComponent,
        
    },
    data() {
        return {
            date: new Date().getFullYear(),
            isLoggedInUser: false,
        }
    },
    mounted() {
        this.isLoggedIn();
    },
    afterCreated() {
    },
    methods: {
        isLoggedIn() {
            this.isLoggedInUser = this.$store.getters.isAuthenticated;
            return this.$store.getters.isAuthenticated;
        },
    }
}
</script>