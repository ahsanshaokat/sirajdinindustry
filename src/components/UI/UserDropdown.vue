<template>
    <div>
      <a
        class="text-blueGray-500 block"
        href="#pablo"
        v-on:click="toggleDropdown($event)"
        ref="btnDropdownRef"
      >
        <div class="items-center flex">
          <span
            class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
          >
            <img
              alt="..."
              class="w-full rounded-full align-middle border-none shadow-lg"
              src="https://lh3.googleusercontent.com/a/AAcHTtcWLT1OMt7d3ChAUEwn2JaMahGpUYv0VnhldQfASw=s192-c-mo"
            />
          </span>
        </div>
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow
        }"
        style="min-width: 12rem"
      >
        <a
          href="#pablo"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
          Action
        </a>
        <a
          href="#pablo"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
          Another action
        </a>
        <a
          href="#pablo"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
          Something else here
        </a>
        <div class="h-0 my-2 border border-solid border-blueGray-100" />
        <a
              class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
              href="#"
              @click="logout"
              ><i class="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>
              Logout</a
            >
      </div>
    </div>
  </template>
  <script>
  import { createPopper } from "@popperjs/core";
  export default {
    data() {
      return {
        dropdownPopoverShow: false
      };
    },
    methods: {
      toggleDropdown: function(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
          this.dropdownPopoverShow = false;
        } else {
          this.dropdownPopoverShow = true;
          createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
            placement: "bottom-end"
          });
        }
      },
      logout() {
        this.$store.dispatch('logout');
        this.$router.replace('/login');
      }
    }
  };
  </script>