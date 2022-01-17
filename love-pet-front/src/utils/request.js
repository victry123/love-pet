// 导入 Axios
import axios from "axios"
// 使用Axios创建新的axios实例 并导出
export default instance = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 5000
}); 