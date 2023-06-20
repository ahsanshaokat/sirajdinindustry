<template>
    <loader :active="loaderActive" text="Please wait few seconds..." />
    <div v-if="!loaderActive" class="flex flex-wrap mt-4">
          <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-slate-800">
                        <i class="fas fa-cart-shopping opacity-75 mr-2 text-red-500"></i> Products 
                    </h3>
                  </div>
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <new-product @products-update="getProducts"></new-product>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Product #
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Image
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th width="60%" class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Description
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        URL
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Similiar Products
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, index) in orderedProducts" :key="index">
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {{ product.productId }}
                      </th>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <img  :src="product.imageLink" loading="lazy" alt="" width="300" height="200">
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ product.title }}
                      </td>
                      <td width="40%" :title="product.descriptionFull" class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                        {{ product.description }} ...
                      </td>
                      <td width="20" class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ product.pageLink }}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {{ product.similarItems }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
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
            products: [],
        }
    },
    computed: {
        orderedProducts: function () {
            return _.orderBy(this.products, ['productId'], ['desc'])
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            this.showLoader();
            setTimeout(async () => {
                this.products = await this.$store.dispatch('getProducts', {});
                for(let index in this.products) {
                  this.products[index].descriptionFull = this.products[index].description;
                  this.products[index].description = this.products[index].description.substring(0,50)
                  if(!this.products[index].pageLink.match("/resources"))
                    this.products[index].similarItems = this.products[index].similarItems? JSON.parse(this.products[index].similarItems):[];
                  else
                  this.products[index].similarItems = "HTML Content"
                }
                this.hideLoader();
            }, 3000);
        },
    }
}
</script>

<style scoped>
</style>