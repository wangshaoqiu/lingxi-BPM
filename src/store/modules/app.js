import Cookies from 'js-cookie'
import { messageNum } from '@/api/message'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  msgNum: 0,
  tastNum: 0
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_MSGNUM: (state, num) => {
    state.msgNum = num
  },
  SET_TASKNUM: (state, num) => {
    state.tastNum = num
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  getMsgNum({ commit }) {
    messageNum().then(res => {
      // this.num = res.unreadMsgCnt
      commit('SET_MSGNUM', res.unreadMsgCnt)
      commit('SET_TASKNUM', res.approvingProjCnt)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
