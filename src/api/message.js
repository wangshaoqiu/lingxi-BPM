
import {
  get,
  post,
  Delete
} from '@/utils/request'

export const getMessage = param => get('/mc/ent-msgs-mc', param)
export const markRead = (msgId) => post('/mc/ent-msgs-mc/' + msgId + '/read')
export const markAllRead = () => post('/mc/ent-msgs-mc/read')
export const delMsg = (msgId) => Delete('/mc/ent-msgs-mc/' + msgId)
export const delAllMsg = () => Delete('/mc/ent-msgs-mc/read')

// 获取WebSocket ID
export const getWSID = param => post('/mc/websocket-mc/wsid/generate', param)

// 额外信息
export const messageNum = () => get('/auc/v1/users/extras')
