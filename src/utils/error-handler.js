import { MessageConst } from '../configs'

const getResponseError = (response) => {
  if (response.ok && response.data && response.data.message) {
    return response.data.message
  } else {
    return MessageConst.ServerError
  }
}

export default {
  getResponseError
}
