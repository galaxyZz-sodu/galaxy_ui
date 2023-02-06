<template>
    <div>
        <div class="thirdTitle">
            template
        </div>
        <div class="code">
            <div v-html="html"></div>
        </div>
        <div class="thirdTitle" v-if="jsShow">
            javascript
        </div>
        <div class="code" v-if="jsShow">
            <div v-html="js"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        html: {
            type: String
        },
        js: {
            type: String
        },
        jsShow: {
            type: Boolean,
            default: true
        }
    }
}
</script>