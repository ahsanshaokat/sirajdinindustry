<template>
    <label v-if="inputLabel !== ''" class="block uppercase text-gray-700 text-xs font-bold mb-2 pull-left"
            for="grid-password"
            >{{ inputLabel }}</label
            ><input
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            :placeholder="inputLabel !== '' ? inputLabel : inputName"
            :type="inputType"
            :name="inputName"
            :required="isRequired"
            v-model="inputValue"
            @change="sendInputData"
            style="transition: all 0.15s ease 0s;"
            />
</template>

<script>
export default {
    props: ['inputType', 'inputName', 'inputLabel', 'isRequired'],
    emits: ['input-data'],
    data() {
        return {
            inputValue: ''
        }
    },
    mounted() {
    },
    methods: {
        sendInputData() {
            this.$emit('input-data', this.inputValue)
        }
    }
}
</script>
