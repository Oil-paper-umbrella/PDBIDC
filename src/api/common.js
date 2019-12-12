import axios from '../control/filter/http.js'
/**
 * @namespace getAllIndexs 获取所有指标
 */
let getAllIndexs = async function () {
  return await axios.get('/dianye/rest/JsonData/allIndexs');
}
/**
 * @namespace getAllTimes 获取所有季度
 */
let getAllTimes = async function () {
  return await axios.get('/dianye/rest/JsonData/allTimes');
}

let requestCommonData =  {
  getAllIndexs,
  getAllTimes
}
export default requestCommonData;