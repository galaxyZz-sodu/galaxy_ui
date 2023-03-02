<template>
    <div class="out">
        <div class="descripTitle">{{title}}</div>
        <div class="descripList">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator: (value) => {
                return ['vertical ', 'horizontal'].includes(value)
            }
        },
        colunm: {
            type: Number,
            default: 3
        }
    },
    provide() {
    return {
      direction: this.direction,
      colunm: this.colunm
    };
  },
}
</script>

<style scoped>
.out {
    width: 100%;
}
.descripTitle {
    margin: 20px 0px;
    font-size: 18px;
}
.descripList {
    display: flex;
    flex-wrap: wrap;
}
</style>
