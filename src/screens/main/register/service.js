import { ApiConst } from '../../../configs'
import { request } from '../../../utils'

// Export
export default {
  data: () => {
    const api = ApiConst.register.data()
    return request(api.url, api.method)
  },
  createCustomer: (data) => {
    const api = ApiConst.register.createCustomer()
    return request(api.url, api.method, data)
  }
}
