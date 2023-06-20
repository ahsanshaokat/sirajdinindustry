<template>
  <loader :active="loaderActive" text="Please wait few seconds..." />
  <section class="breadcrumb-box" v-if="!loaderActive">
    <div class="my-container-wrapper">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb" style="margin-bottom: 0">
          <li class="breadcrumb-item">
            <a href="https://sirajdinindustry.com/">Home</a>
          </li>
          <li class="breadcrumb-item"><a>Resources</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ activePage.title }}
          </li>
        </ol>
      </nav>
    </div>
  </section>

  <div
    class="page-section-wrapper moble-mer-top inner-page inner-bg product-page"
    style="transform: none"
    v-if="!loaderActive"
  >
    <div class="inner-hei-top moblie-hide"></div>
    <div class="my-container-wrapper" style="transform: none">
      <div class="row" style="transform: none">
        <div
          class="col-md-9 sticky-item"
          style="
            position: relative;
            overflow: visible;
            box-sizing: border-box;
            min-height: 1px;
          "
        >
          <div
            class="theiaStickySidebar"
            style="
              padding-top: 0px;
              padding-bottom: 1px;
              position: static;
              transform: none;
            "
          >
            <div class="inner-right-wapper moblie-show padd-b40">
              <div class="imgblog">
                <img
                  :src="activePage.imageLink"
                  class=""
                  loading="lazy"
                  alt="Metal Beam Crash Barriers"
                />
              </div>
            </div>
            <section>
              <div class="inner-left-wapper">
                <div class="imgblog padd-b40 moblie-hide">
                  <img
                    class="bannerimg"
                    :src="activePage.imageLink"
                    loading="lazy"
                    alt="Metal Beam Crash Barriers"
                  />
                </div>
                <div>
                  <h1 class="titel-inner-top padd-b25">
                    <span class="colo-we">{{ activePage.title }}</span>
                  </h1>

                  <p class="padd-b40">{{ activePage.description }}</p>
                </div>
                <div style="clear: both"></div>
              </div>
              <div style="clear: both"></div>
            </section>
            <section>
              <div
                class="padd-t30 project-location-sec product-similar"
                style="background: #fff"
              >
                <div class="my-container-wrapper">
                  <div style="clear: both"></div>
                </div>
              </div>
            </section>

            <section>
              <div
                class="padd-t30 project-location-sec product-similar"
                style="background: #fff"
              >
                <div class="my-container-wrapper">
                  <div class="inner-left-wapper">
                    <div>
                      <div class="padd-b30 text-line s-90">
                        Similar <span class="colo-we"> Products </span>
                      </div>
                      <!--<div  class="sub-titel-inner-n sub-titel-mob-inner padd-b20"> Location Specific <span class="colo-we"> Projects  </span></div> -->
                      <div class="row padd-t20">
                        <div class="col-sm-12">
                          <div class="padd-b30 mob-60">
                            <div class="col-sm-3 men-ht" v-for="(similiarProduct, index) in similiarProducts" v-bind:key="index">
                              <a
                                :href="similiarProduct.pageLink"
                              >
                                <div class="thumb">
                                  <img
                                    :src="similiarProduct.imageLink"
                                    :alt="similiarProduct.title"
                                  />
                                </div>
                                <div class="text-bg-n-bt men-ht-text">
                                  {{ similiarProduct.title }}
                                </div>
                              </a>
                            </div>

                            <div style="clear: both" id="quote-today"></div>

                            <div style="clear: both"></div>
                          </div>
                        </div>
                      </div>

                      <div style="clear: both" class="padd-b30"></div>
                    </div>
                    <div style="clear: both"></div>
                  </div>

                  <div style="clear: both"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div style="clear: both"></div>
  </div>
</template>

<script>
import AppModal from "../UI/elements/AppModal.vue";
import Loader from "../../mixins/loader";
import NewProduct from "../products/NewProduct.vue";
import _ from "lodash";

export default {
  mixins: [Loader],
  components: {
    AppModal,
    NewProduct,
  },
  data() {
    return {
      activePage: {},
      similiarProducts: [],
      products: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.showLoader();
      setTimeout(async () => {
        this.products = await this.$store.dispatch("getProducts", {});
        for (let index in this.products) {
          if (
            this.products[index].pageLink ==
            "/application/" + this.$route.params.id
          ) {
            this.activePage = this.products[index];
          }
        }
        this.activePage.similarItems = this.activePage.similarItems
            ? JSON.parse(this.activePage.similarItems)
            : [];
        for (let index in this.activePage.similarItems) {
          this.similiarProducts.push(await this.$store.dispatch('getProduct', {
                productId: this.activePage.similarItems[index]
              }));
        }
        this.hideLoader();
      }, 3000);
    },
  },
};
</script>

<style scoped></style>
