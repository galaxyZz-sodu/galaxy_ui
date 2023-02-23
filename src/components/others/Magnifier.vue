<template>
    <div>
        <div class="title">
            放大镜
        </div>
        <div class="secondTitle">
            基础用法
        </div>
        <g-magnifier imgUrl="https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big_6263316_e0beb62983b846b941ba2f62571dd8f4.jpg"
        :width="400"
        :maskWidth="50"
        >
        </g-magnifier>
        <Code :jsShow="false" :html="basicUsageHTML"></Code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basicUsageHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-magnifier</span> <span style="color: rgb(209, 154, 102);">imgUrl</span>=<span style="color: rgb(152, 195, 121);">"https://pic.5tu.cn/uploads/allimg/2107/pic_5tu_big.jpg"</span></p><p>:<span style="color: rgb(209, 154, 102);">width</span>="<span style="color: rgb(209, 154, 102);">400</span>"</p><p>:<span style="color: rgb(209, 154, 102);">maskWidth</span>="<span style="color: rgb(209, 154, 102);">50</span>"</p><p>&gt;</p><p>&lt;/<span style="color: rgb(224, 108, 117);">g-magnifier</span>&gt;</p>'
        }
    }
}
</script>

<style scoped>

</style>