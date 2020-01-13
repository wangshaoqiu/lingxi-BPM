<template>
  <div class="main-container2">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
import { getStorage, removeToken, removeStorage } from '@/utils/auth'

export default {
  name: 'Layout3',
  data() {
    return {
      nickName: '',
      keyword: '',
      headName: '',
      avatarUrl: ''
    }
  },
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
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  created() {
    // console.log(JSON.parse(getStorage("userInfo")))
    this.nickName = JSON.parse(getStorage('ents')).memName
    const avatar = JSON.parse(getStorage('userInfo')).avatar
    if (avatar !== '') {
      this.avatarUrl = avatar
    }
    const name1 = this.nickName.split('').reverse()
    this.headName = name1[1] + name1[0]
  },
  methods: {
    async logOut() {
      console.log('out')
      removeToken()
      removeStorage('ents')
      removeStorage('userInfo')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container2 {
  width: 100vw;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
</style>
