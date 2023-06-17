import Loader from '../components/UI/elements/Loader.vue';

export default {
    components: {
        Loader
    },
    data() {
        return {
            loaderActive: false,
        }
    },
    methods: {
        showLoader () {
            this.loaderActive = true;
        },
        hideLoader () {
            this.loaderActive = false;
        },
    }
}