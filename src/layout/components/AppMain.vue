<template>
  <section class="app-main">
    <vue-scroll>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </vue-scroll>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@media(min-width: 1800px) {
    .app-main{
       margin-top:110px !important;
       height: calc(100% - 110px);
    }
  }
.app-main {
  height: calc(100% - 85px);
  width: calc(100% - #{$sideBarWidth} - 80px);
  position: fixed;
  overflow-y: auto;
  margin-top:85px;
  background: #fff;
  border-radius:4px;

}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
