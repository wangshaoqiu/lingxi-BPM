
import {
  get,
  post,
  Delete,
  put
} from '@/utils/request'

export const addTemplate = param => post('/pc/templates-mc', param)
export const templateList = param => get('/pc/templates-mc/aggr-by-types', param)
export const templateDetail = (tmplId) => get('/pc/templates-mc/' + tmplId)
export const delTemplate = (tmplId) => Delete('/pc/templates-mc/' + tmplId)
// 模版各个环节下的项目
export const getProjects = (param, tmplId) => get('/pc/templates-mc/' + tmplId + '/projects/aggr-by-steps', param)
// 模版下项目参与人
export const getParticipants2 = (param, tmplId) => get('/pc/templates-mc/' + tmplId + '/projects/participants', param)

export const editTemplate = (param, tmplId) => put('/pc/templates-mc/' + tmplId, param)
