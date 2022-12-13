<template>
    <div class="out">
        <div class="in">
            <slot></slot>  
        </div>
              
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
        }
    }
}
</script>

<style scoped>
    .in {
        font-size: 12px;
        padding: 5px 10px;
        display: inline-block;
        background-color: #f1f3f6;
        box-shadow:  2px 2px 6px #c6c7ca,
                -4px -4px 8px #ffffff;
        border-radius: 5px;
    }
</style>