<template>
  <loader :active="loaderActive" text="Please wait few seconds..." />
  <section class="breadcrumb-box" v-if="!loaderActive">
    <div class="my-container-wrapper">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb" style="margin-bottom: 0">
          <li class="breadcrumb-item">
            <a href="https://sirajdinindustry.com/">Home</a>
          </li>
          <li class="breadcrumb-item"><a>Products</a></li>
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
      engineeringActions: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.showLoader();
      setTimeout(async () => {
        this.engineeringActions = await this.$store.dispatch("getProducts", {});
        for (let link in this.engineeringActions) {
          if (
            this.engineeringActions[link].pageLink ==
            "/products/" + this.$route.params.id
          ) {
            console.log("products/" + this.$route.params.id);
            this.activePage = this.engineeringActions[link];
          }
        }
      this.hideLoader();
      }, 3000);
    },
  },
};
</script>

<style scoped></style>
