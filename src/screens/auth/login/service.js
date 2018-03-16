import { ApiConst } from '../../../configs'
import { request } from '../../../utils'

// Export
export default {
  login: (data) => {
    const api = ApiConst.common.login()
    return request(api.url, api.method, data)
  }
}
