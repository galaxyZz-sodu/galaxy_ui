<template>
    <div>
        <tree :data="data"></tree>
    </div>
</template>

<script>
export default {
    props: {
        data: {

        }
    },
    components: {
        'tree': () => import('./tree')
    }
}
</script>

<style scoped>

</style>