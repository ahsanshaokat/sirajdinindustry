<template>
                <app-modal 
                        title="Add Product Details"
                        btn-title="New Product"
                        >
                        <template v-slot:modal-body>
                            <div class="relative w-full mb-3 pb-3">
                                <alert class="text-red-500 pull-left" v-if="isError">{{  isError? errorMessage: '' }}</alert>
                                <alert class="text-green-500 pull-left" v-if="!isError && isSuccess">{{  isSuccess? errorMessage: '' }}</alert>
                            </div>
                            <form @submit.prevent="formSubmit">
                            <div class="relative w-full mb-3 pb-3">
                                <input-field
                                :input-label="productLabel"
                                :input-name="productName"
                                :input-type="productType"
                                :is-required="true"
                                @input-data="getProductTitle"
                                style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <div class="relative w-full mb-3 pb-3">
                                <input-field
                                        :input-label="descriptionLabel"
                                        :input-name="productDescriptionName"
                                        :input-type="descriptionproductType"
                                        :is-required="true"
                                        @input-data="getProductDescription"
                                        style="transition: all 0.15s ease 0s;"
                                    />  
                            </div>
                            <div class="relative w-full mb-3 pb-3">
                                <input-field
                                :input-label="productPageLinkLabel"
                                :input-name="productPageLinkName"
                                :input-type="productPageLinkType"
                                :is-required="true"
                                @input-data="getProductPageLink"
                                style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <div class="relative w-full mb-3 pb-3">
                                <input-field
                                :input-label="productImageLinkLabel"
                                :input-name="productImageLinkName"
                                :input-type="productImageLinkType"
                                :is-required="true"
                                @input-data="getProductImageLink"
                                style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <div class="relative w-full mb-3 pb-3">
                                <input-field
                                :input-label="productSimilarItemsLabel"
                                :input-name="productSimilarItemsName"
                                :input-type="productSimilarItemsType"
                                :is-required="true"
                                @input-data="getProductSimilarItems"
                                style="transition: all 0.15s ease 0s;"
                                />
                            </div>
                            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="reset">
                                Reset
                            </button>
                            <button id="save" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
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
    emits: ['products-update'],
    components: {
        AppModal,
        InputField
    },
    data() {
        return {
            productValue:'',
            productType: 'text',
            productName: 'productName',
            productLabel: 'Product title',
            descriptionValue:'',
            descriptionproductType: 'textarea',
            productDescriptionName: 'productDescription',
            descriptionLabel: 'Description',
            pageLinkValue:'',
            productPageLinkType: 'text',
            productPageLinkName: 'productPageLink',
            productPageLinkLabel: 'Page Link',
            imageLinkValue:'',
            productImageLinkType: 'text',
            productImageLinkName: 'productImageLink',
            productImageLinkLabel: 'Image Link',
            similarItemsValue:'',
            productSimilarItemsType: 'text',
            productSimilarItemsName: 'productSimilarItems',
            productSimilarItemsLabel: 'Similar Items',
            isError: false,
            errorMessage: '',
            isSuccess: false,
        }
    },
    methods: {
          getProductTitle(inputValue) {
            this.productValue = inputValue;
          },
          getProductDescription(inputValue) {
            this.descriptionValue = inputValue;
          },
          getProductPageLink(inputValue) {
            this.pageLinkValue = inputValue;
          },
          getProductImageLink(inputValue) {
            this.imageLinkValue = inputValue;
          },
          getProductSimilarItems(inputValue) {
            this.similarItemsValue = inputValue;
          },
          disableOnSubmit() {
            document.getElementById('save').disabled = true;
          },
          async formSubmit() {
              this.disableOnSubmit();
              
              const payloadData = {
                productId: new Date().getTime(),
                title: this.productValue, 
                description: this.descriptionValue,
                imageLink: this.imageLinkValue,
                pageLink: this.pageLinkValue,
                similarItems: this.similarItemsValue,
              }
              
              const responseData = await this.$store.dispatch('addProduct', payloadData);
              if(responseData.error) {
                this.isError = true;
                this.errorMessage = responseData.error.message;
              } else {
                this.isSuccess = true;
                this.errorMessage = "Product added successfully!"
                this.$emit('products-update');
              }

          }
      }

}
</script>

<style scoped>
</style>