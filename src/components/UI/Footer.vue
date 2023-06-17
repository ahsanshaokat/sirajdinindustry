<template>
    <footer>
   <div id="footer" class="container">
      <div class="row">
         <div class="component">
            <div class="component-content">
               <div class="site-footer">
                  <div class="site-footer__top">
                     <div class="container">
                        <div class="row">
                           <div class="col-12 col-lg-3">
                              <a href="/" class="site-footer__logo-link">
                              <img class="site-footer__logo" src="../../assets/images/webp/mp1.webp" loading="lazy" alt="NextGen Healthcare Logo" width="148" height="60">
                              </a>
                           </div>
                           <div class="col-12 col-lg-3">
                              <div class="site-footer__dropdown" data-expander="" data-expander-hold="" data-expander-loaded="">
                                 <button class="site-footer__dropdown-title site-footer__dropdown-title--mb" data-expander-toggle="" id="data-expander-5" role="button" aria-expanded="false">
                                    <span class="sr-only">Toggle</span> Solutions
                                    <svg class="site-footer__dropdown-title-icon" aria-hidden="true" focusable="false">
                                       <use xlink:href="/-/media/Themes/NextGen/Common/Common/images/svg-legend.svg#icon-chevron-down"></use>
                                    </svg>
                                 </button>
                                 <div class="site-footer__dropdown-title site-footer__dropdown-title--dsk" aria-hidden="true">
                                    ENGINEERING
                                 </div>
                                 <div class="site-footer__dropdown-content" data-expander-target="" aria-labelledby="data-expander-5" tabindex="0">
                                    <ul class="site-footer__list">
                                       <li v-for="(link, i) in engineeringActions" v-bind:key="i" class="site-footer__list-item">
                                          <a :href="link.href" class="site-footer__list-link">
                                               {{  link.name }}
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-3">
                              <div class="site-footer__dropdown" data-expander="" data-expander-hold="" data-expander-loaded="">
                                 <button class="site-footer__dropdown-title site-footer__dropdown-title--mb" data-expander-toggle="" id="data-expander-6" role="button" aria-expanded="false">
                                    <span class="sr-only">Toggle</span> Services
                                    <svg class="site-footer__dropdown-title-icon" aria-hidden="true" focusable="false">
                                       <use xlink:href="/-/media/Themes/NextGen/Common/Common/images/svg-legend.svg#icon-chevron-down"></use>
                                    </svg>
                                 </button>
                                 <div class="site-footer__dropdown-title site-footer__dropdown-title--dsk" aria-hidden="true">       
                                       PIPES & FITTINGS
                                 </div>
                                 <div class="site-footer__dropdown-content" data-expander-target="" aria-labelledby="data-expander-6" tabindex="0">
                                    <ul class="site-footer__list">
                                       <li v-for="(link, i) in pipesActions" v-bind:key="i" class="site-footer__list-item">
                                          <a :href="link.href" class="site-footer__list-link">
                                               {{  link.name }}
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-3">
                              <div class="site-footer__dropdown" data-expander="" data-expander-hold="" data-expander-loaded="">
                                 <button class="site-footer__dropdown-title site-footer__dropdown-title--mb" data-expander-toggle="" id="data-expander-7" role="button" aria-expanded="false">
                                    <span class="sr-only">Toggle</span> Company
                                    <svg class="site-footer__dropdown-title-icon" aria-hidden="true" focusable="false">
                                       <use xlink:href="/-/media/Themes/NextGen/Common/Common/images/svg-legend.svg#icon-chevron-down"></use>
                                    </svg>
                                 </button>
                                 <div class="site-footer__dropdown-title site-footer__dropdown-title--dsk" aria-hidden="true">
                                    FOLLOW US ON SOCIAL MEDIA
                                 </div>
                                 <div class="site-footer__dropdown-content" data-expander-target="" aria-labelledby="data-expander-7" tabindex="0">
                                    <ul class="site-footer__list">
                                       <li class="site-footer__list-item">
                                          <a href="/company/awards" class="site-footer__list-link">
                                          Awards
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/careers" class="site-footer__list-link">
                                          Careers
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/corporate-social-responsibility" class="site-footer__list-link">
                                          Corporate Social Responsibility
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/diversity-equity-inclusion" class="site-footer__list-link">
                                          Diversity, Equity &amp; Inclusion
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="https://investor.nextgen.com/" rel="noopener noreferrer" class="site-footer__list-link" target="_blank">
                                          Investors
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/leadership" class="site-footer__list-link">
                                          Leadership
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/newsroom" class="site-footer__list-link">
                                          Newsroom
                                          </a>
                                       </li>
                                    </ul>
                                    <p class="mhfr">&copy; 2023 Siraj Din Industry Limited. All Rights Reserved. </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
</template>


<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

export default {
  data() {
    return {
      isLoggedIn: this.$store.getters.isAuthenticated,
      mobileMenuOpen: null,
      callsToAction: [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
      ],
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
      pipesActions: [
        { name: 'uPVC Pipes & Fittings', href: 'products/upvc-pipes-fittings'},
        { name: 'CPVC Pipes & Fittings', href: 'products/cpvc-pipes-fittings' },
        { name: 'SWR Pipes & Fittings', href: 'products/swr-pipes-fittings'},
        { name: '', href: '#'},
        { name: 'PVC Casing Pipes', href: 'products/pvc-casing-pipes'},
        { name: 'Column Riser Pipes', href: 'products/column-riser-pipes'},
        { name: 'Grey Agriculture Pipes', href: 'products/grey-agricultural-pipes'},
      ],
      products: [
        { name: 'Electronic Health Record', description: 'Award-winning EHR/EMR software that delivers better healthcare outcomes for all. ', href: '#', icon: ChartPieIcon },
        { name: 'Medical Billing', description: 'The only medical billing system your business needs', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Provider Experience', description: 'Use NextGen Healthcare solutions to improve the experience', href: '#', icon: FingerPrintIcon },
        { name: 'Tele Health', description: 'Learn how NextGen Healthcare improves patient access', href: '#', icon: SquaresPlusIcon },
        { name: 'Practice Management', description: 'Capture your practice’s true revenue potential ', href: '#', icon: ArrowPathIcon },
        { name: 'API Marketplace', description: 'Find third-party vendors that offer applications', href: '#', icon: FingerPrintIcon },
      ]

    }
  },
  created() {
    this.mobileMenuOpen = ref(false);
  },
  methods: {

  }
}
</script>

<style scoped>
</style>