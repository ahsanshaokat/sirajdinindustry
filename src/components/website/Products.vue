<template>
    
    <section class="breadcrumb-box">
        <div class="my-container-wrapper">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb" style="margin-bottom:0">
                    <li class="breadcrumb-item"><a href="https://sirajdinindustry.com/">Home</a></li>
                    <li class="breadcrumb-item"><a>Products</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ activeLink }}</li>
                    </ol>
                </nav>
        </div>
    </section>
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
            activeLink: '',
            engineeringActions: [
                { name: 'Transmission Monopoles', href: 'products/monopoles'},
                { name: 'Metal Beam Crash Barrier', href: 'products/metal-beam-crash-barrier' },
                { name: 'Pedestrian Barriers', href: 'products/pedestrian-barriers'},
                { name: 'High Mast Lighting Systems', href: 'products/high-mast-lighting-systems'},
                { name: 'Street Light Poles', href: 'products/street-light-pole'},
                { name: 'Transmission Towers', href: 'products/transmission-towers'},
                { name: 'Telecom Towers', href: 'products/telecom-towers'},
                { name: 'Jal Minar - Water Towers', href: 'products/jal-minar-water-towers'},
                { name: 'Railway Electrification Structures', href: 'products/railway-electrification-structures'},
                { name: 'Steel Tubes & Pipes', href: 'products/steel-tubes-pipes'},
                { name: 'Steel Tubular Poles', href: 'products/steel-tubular-pole'},
            ],
        }
    },
    mounted() {
        this.engineeringActions.forEach((link) => {
            if(link.href == 'products/'+this.$route.params.id) {
                console.log('products/'+ this.$route.params.id)
                this.activeLink = link.name;
            }
        })
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