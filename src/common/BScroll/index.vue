<template>
    <div class="wrapper" ref="wrapper"> 
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            pullUpLoad: true
        });
    },
    methods: {
        onLoad(){
             this.scroll.on("pullingUp", () => {
             this.$store.dispatch("home/getActionsHomeList");
      });
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>