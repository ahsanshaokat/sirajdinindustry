<template>
      <button class="bg-indigo-500 text-white active:bg-indigo-600 font-bold text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
        {{ btnTitle }}
      </button>
      <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="max-w-5xl relative p-6 flex-auto">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 class="text-slate-700 text-3xl font-semibold">
                {{ title }}
              </h3>
              <button class="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl " v-on:click="toggleModal()">
                <span class=" h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <slot name="modal-body"></slot>
            </div>
            <!--footer-->
            <div v-if="false" class="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
              <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </template>
  
  <script>
  export default {
    name: "large-modal",
    props: ['title', 'btnTitle'],
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      toggleModal: function(){
        this.showModal = !this.showModal;
      }
    }
  }
  </script>