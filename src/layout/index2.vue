<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <navbar />
    <div class="main-container2">
      <section class="app-main">
        <!-- <vue-scroll> -->
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
        <!-- </vue-scroll> -->
      </section>
    </div>
  </div>
</template>

<script>
import { Navbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout2',
  components: {
    Navbar
  },
  mixins: [ResizeMixin],
  computed: {
    key() {
      return this.$route.path
    },
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        // hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.main-container2 {
  width: 100vw;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
@media(min-width: 1800px) {
    .app-main{
       margin-top:110px !important;
       height: calc(100% - 110px);
    }
  }
.app-main {
  height: calc(100% - 85px);
  width:1200px;
  position: fixed;
  overflow-y: auto;
  margin-top:85px;
  background: #fff;
  border-radius:4px;
  left:50%;
  margin-left:-600px;

}

.app-wrapper {
  @include clearfix;
  position: relative;
  min-height: 100%;
  // width: 100%;
  background: #f8f8f8;
  overflow: hidden;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

// .hideSidebar .fixed-header {
//   width: calc(100% - 54px)
// }

.mobile .fixed-header {
  width: 100%;
}
</style>
