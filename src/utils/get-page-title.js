
const title = '希盟工作云平台'
// const title = 'neets-运营管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
