<template>
    <div>
        <div class="container">
                <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
    }
</style>
