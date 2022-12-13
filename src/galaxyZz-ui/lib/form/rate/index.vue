
<template>
    <div class="out">
        <div v-for="(item, index) in 5" :key="index" class="star" @mouseover="getMouseOver(index)" @mouseleave="getMouseLeave()" @click="getClick(index)">
            <svg v-if="index <= selectIndex" :class="{select: index == selectIndex && isOver}"  class="icon-fill" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="747"><path d="M512 837.12L255.6928 950.0672c-14.336 6.3488-31.1296-0.2048-37.4784-14.5408-1.9456-4.5056-2.7648-9.4208-2.2528-14.336l28.16-278.6304-186.5728-208.896c-10.4448-11.6736-9.4208-29.696 2.2528-40.1408 3.6864-3.2768 8.0896-5.5296 12.9024-6.5536L346.5216 327.68 487.424 85.7088c7.8848-13.6192 25.2928-18.1248 38.912-10.24 4.3008 2.4576 7.7824 6.0416 10.24 10.24L677.4784 327.68l273.7152 59.2896c15.36 3.2768 25.088 18.432 21.8112 33.792-1.024 4.8128-3.2768 9.216-6.5536 12.9024l-186.6752 208.896L807.936 921.1904c1.536 15.6672-9.8304 29.5936-25.3952 31.1296-4.9152 0.512-9.8304-0.3072-14.336-2.2528L512 837.12z" 
            fill="black;" p-id="748"></path></svg>
            <svg v-else class="icon" style="color: #ccc;width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777"><path d="M1015.473241 383.59866c-7.991639-30.368227-33.564883-51.146488-63.93311-55.941471l-255.73244-38.359866-115.079598-242.945818C567.941471 17.581605 542.368227 0 513.598328 0c-30.368227 0-59.138127 17.581605-71.924749 46.351505l-115.079598 242.945818-255.73244 43.154849c-30.368227 4.794983-55.941471 25.573244-63.93311 55.941471S2.133448 447.53177 24.510036 473.105014l187.004347 191.79933-43.154849 268.519062c-4.794983 30.368227 7.991639 63.93311 33.564883 81.514715 12.786622 4.794983 30.368227 7.991639 43.154849 7.991639s25.573244-4.794983 38.359866-7.991639l230.159196-123.071237 230.159196 123.071237c25.573244 12.786622 59.138127 12.786622 81.514715-4.794983 25.573244-17.581605 38.359866-46.351505 33.564883-81.514715L815.682272 660.109361l187.004347-191.79933c17.581605-20.778261 25.573244-54.343143 12.786622-84.711371z m-271.715717 225.364213c-12.786622 12.786622-17.581605 30.368227-17.581606 51.146488l46.351505 273.314045-234.954179-127.86622c-7.991639-4.794983-17.581605-7.991639-25.573244-7.991639s-17.581605 4.794983-25.573244 7.991639l-230.159196 127.86622 43.154849-273.314045c4.794983-17.581605-4.794983-38.359866-17.581605-51.146488l-191.79933-196.594314 263.724079-43.154849c17.581605-4.794983 33.564883-17.581605 43.154849-33.564883L512 92.703009 627.079598 335.648827c7.991639 17.581605 25.573244 30.368227 43.154849 33.564883l263.724079 43.154849-190.201002 196.594314z" p-id="778"></path></svg>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectIndex: this.value - 1,
            storageIndex: -1,
            isClick: false,
            isOver: false
        }
    },
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    methods: {
        getMouseOver(index) {
            // if (this.selectIndex != -1) {
            //     this.storageIndex = this.selectIndex;
            // }
            this.isOver = true;
            this.selectIndex = index;
        },
        getMouseLeave() {
            if (this.isClick) {
                this.isClick = false;
                return
            };
            this.isOver = false;
            this.selectIndex = this.storageIndex;
        },
        getClick(index) {
            this.selectIndex = index;
            this.storageIndex = this.selectIndex;
            this.$emit('input', this.selectIndex + 1);
            this.$emit('change', this.selectIndex + 1)
            this.isClick = true;
            // this.isOver = false;
        }
    }
}
</script>

<style scoped>
    .out {
        display: flex;
    }
    .star {
        padding: 5px;
    }
    .icon-fill {
        color: #fda085;
        width: 1em;
        height: 1em;
        transition: all 0.2s;
    }
    .icon {
        
    }
    .select {
        transform: scale(1.2);
        
    }
</style>
