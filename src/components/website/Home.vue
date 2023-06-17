<template>
      <router-view></router-view>
</template>

<script>
import AppModal from '../UI/elements/AppModal.vue';
import Loader from '../../mixins/loader';
import NewProduct from '../products/NewProduct.vue';
import _ from 'lodash';

export default {
    mixins: [Loader],
    components: {
        AppModal,
        NewProduct,
    },
    data() {
        return {
        }
    },
    mounted() {
        this.showLoader();
        setTimeout(() => {  
          this.hideLoader();
        }, 3000)
    },
    methods: {
    }
}
</script>

<style scoped>
</style>