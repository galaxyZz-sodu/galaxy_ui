<template>
  <div class="out" :class="{'outSkip': to}">
    <div class="inner" :class="{'isSkip': to}" @click="skip">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        to: {
            type: Object
        }
    },
    methods: {
        skip() {
            if (this.to) {
                this.$router.push({
                    path: `${this.to?.path}`
                })
            }
        }
    },
    mounted() {
        this.currentIndex = this.$parent.$children.findIndex(
            (e) => e._uid === this._uid
        );
    }
};
</script>

<style scoped>
.out {
    /* border-left: 2px solid transparent; */
    background-color: #f1f3f6;
    box-shadow: 3px 2px 6px #c6c7ca, -2px -3px 20px #ffffff;
    padding: 8px 15px;
    margin-right: 6px;
    transform: skewX(-30deg);
}
.inner {
    font-size: 14px;
    transform: skewX(30deg);
}
.first {

}
.last {

}
.isSkip {
    cursor:pointer;
    font-weight: 600;
    transition: 0.3s all ease-out;

}

.isSkip:hover {
    color: #4facfe;
    
}
.outSkip {
    transition: 0.3s all ease-out;
}
.outSkip:hover {
    box-shadow: 1px 1px 3px #c6c7ca, -1px -1px 10px #ffffff;
}
</style>
