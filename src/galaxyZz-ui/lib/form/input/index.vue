<template>
    <div>
        <div class="input">
            <input v-bind:value="value" v-on:input="onInput" type="text">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
            this.$emit('change', e.target.value)
        }
    }
}
</script>

<style scoped>
    .input {
        background: #f1f3f6;
        box-shadow:  3px 3px 3px #c6c7ca inset,
                -3px -3px 3px #ffffff inset;
        border-radius: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    input {
        outline: none;
        border: none;
        font-size: 14px;
        padding: 10px 15px;
        width: 90%;
        /* word-spacing: 10px; */
        /* padding: 6px; */
        background-color: transparent;
    }
</style>