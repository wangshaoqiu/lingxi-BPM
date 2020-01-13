
import {
  get,
  post,
  put,
  Delete
} from '@/utils/request'

export const addProject = param => post('/pc/projects-mc', param)
export const projectDetail = (projId) => get('/pc/projects-mc/' + projId)
export const updateStartTime = (param, projId) => put('/pc/projects-mc/' + projId + '/period/start-date', param)
export const updateEndTime = (param, projId) => put('/pc/projects-mc/' + projId + '/period/end-date', param)
// 更新紧急程度
export const updateDegree = (param, projId) => put('/pc/projects-mc/' + projId + '/urgency-degree', param)
// 更新公开标识
export const updatePublic = (param, projId) => put('/pc/projects-mc/' + projId + '/public-flag', param)

//  归档
export const archive = (projId) => post('/pc/projects-mc/' + projId + '/archive')
// 项目列表
export const getList = (param, path) => get('/pc/projects-mc/' + path, param)
// 获取归档项目
export const getArchivedList = (param) => get('/pc/projects-mc/archived', param)

// 添加子任务
export const addTask = (param, projId) => post('/pc/projects-mc/' + projId + '/subtasks', param)
// 子任务列表
export const taskList = (projId) => get('/pc/projects-mc/' + projId + '/subtasks')
// 设置子任务执行人
export const setExecutor = (param, projId, subtaskId) => put('/pc/projects-mc/' + projId + '/subtasks/' + subtaskId + '/executor', param)
// 删除子任务
export const delTask = (projId, subtaskId) => Delete('/pc/projects-mc/' + projId + '/subtasks/' + subtaskId)

// 项目参与人
export const getParticipants = (param, projId) => get('/pc/projects-mc/' + projId + '/participants', param)

// 各流程环节下的参与人
export const getbySteps = (projId) => get('/pc/projects-mc/' + projId + '/participants/aggr-by-steps')
// 添加项目步骤执行人
export const addExecutors = (param, projId) => post('/pc/projects-mc/' + projId + '/flow-steps/executors', param)
// 删除项目步骤执行人
export const delExecutors = (projId, stepId, executorId) => Delete('/pc/projects-mc/' + projId + '/flow-steps/' + stepId + '/executors/' + executorId)

// 添加资料
export const addMaterials = (param, projId) => post('/pc/projects-mc/' + projId + '/materials', param)
// 资料列表
export const materialsList = (projId) => get('/pc/projects-mc/' + projId + '/materials')
// 删除资料
export const delMaterials = (projId, materialId) => Delete('/pc/projects-mc/' + projId + '/materials/' + materialId)
// 标记为审核资料
export const markMaterials = (projId, materialId) => post('/pc/projects-mc/' + projId + '/materials/' + materialId + '/mark-approval')
// 当前审核资料
export const currMaterials = (projId) => get('/pc/projects-mc/' + projId + '/curr-approval-materials')
// 添加审核资料
export const addApprData = (param, projId) => post('/pc/projects-mc/' + projId + '/curr-approval-materials', param)
//  删除审核资料
export const delApprData = (projId, materialId) => Delete('/pc/projects-mc/' + projId + '/curr-approval-materials/' + materialId)

// 留言
export const postMessage = (param, projId) => post('/pc/projects-mc/' + projId + '/messages/leave', param)
// 项目动态
export const getNews = (param, projId) => get('/pc/projects-mc/' + projId + '/trends', param)

// 项目审核信息
export const getCheckInfo = (projId) => get('/pc/projects-mc/' + projId + '/approvals')
// 提交审核
export const submitCheck = (projId, nodeId) => post('/pc/projects-mc/' + projId + '/flow-nodes/' + nodeId + '/approvals/submit')
// 审核通过
export const agreeCheck = (projId, nodeId) => post('/pc/projects-mc/' + projId + '/flow-nodes/' + nodeId + '/approvals/agree')
// 审核驳回
export const rejectCheck = (param, projId, nodeId) => post('/pc/projects-mc/' + projId + '/flow-nodes/' + nodeId + '/approvals/reject', param)
