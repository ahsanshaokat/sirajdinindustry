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
                                 <div class="site-footer__dropdown-title site-footer__dropdown-title--dsk" aria-hidden="true">
                                    QUICK LINKS
                                 </div>
                                 <div class="site-footer__dropdown-content" data-expander-target="" aria-labelledby="data-expander-7" tabindex="0">
                                    <ul class="site-footer__list">
                                       <li class="site-footer__list-item">
                                          <a href="/company/corporate-social-responsibility" class="site-footer__list-link">
                                          About Us
                                          </a>
                                       </li>
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
                                          Contact Us
                                          </a>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <a href="/company/leadership" class="site-footer__list-link">
                                          Leadership
                                          </a>
                                       </li>
                                    </ul>
                                    
                                 </div>
                              </div>
                           </div>
                           <div class="col-12 col-lg-3">
                              <div class="site-footer__dropdown" data-expander="" data-expander-hold="" data-expander-loaded="">
                                 <div class="site-footer__dropdown-title site-footer__dropdown-title--dsk" aria-hidden="true">
                                    FOLLOW US ON SOCIAL MEDIA
                                 </div>
                                 <div class="site-footer__dropdown-content" data-expander-target="" aria-labelledby="data-expander-7" tabindex="0">
                                    <ul class="site-footer__list">
                                       <li class="site-footer__list-item">
                                          <a href="https://www.facebook.com/sirajdin.industry" target="_blank" class="icon-button facebook"><i class="fa fa-facebook" aria-hidden="true"></i><span></span></a> 
                                          <a href="https://twitter.com/sirajdin.industry" target="_blank" class="icon-button twitter"><i class="fa fa-twitter" aria-hidden="true"></i><span></span></a> 
                                          <a href="https://www.youtube.com/channel/sirajdin.industry" target="_blank" class="icon-button youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i><span></span></a> 
                                       </li>
                                       <li class="site-footer__list-item">
                                          <p class="my-4"><i class="fa fa-envelope"></i> <a href="mailto:sirajdin.industry@gmail.com">sirajdin.industry@gmail.com</a></p>
                                       </li>
                                       <li class="site-footer__list-item">
                                          <b>Factory Phone: </b>042-36885412
                                          <br><b>Mobile: </b> 0301-4860789/0309-4622632 
                                       </li>
                                       <li class="site-footer__list-item">
                                          <b>Address: </b> Karol Ghati, Adj. Khyber Kanata, Lahore Ring Rd, Bahadrabad, Lahore, 54000
                                       </li>
                                    </ul>
                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="row">
                           <div class="col-md-4"></div>
                           <div class="col-md-4" style="margin-top: 15px;">
                              <small>© 2023 Siraj Din Engineering Industry Pvt Ltd. All Rights Reserved. </small>
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