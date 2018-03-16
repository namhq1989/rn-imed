import apisauce from 'apisauce'
import { AsyncStorage } from 'react-native'
import { AppConst } from '../configs'

const api = apisauce.create({
  baseURL: AppConst.endpoint,
  headers: {
    'Cache-Control': 'no-cache'
  },
  timeout: 30000
})

export default async (url, method, data) => {
  const token = await AsyncStorage.getItem(AppConst.storage.authKey)

  if (token) {
    api.setHeader('Authorization', `Bearer ${token}`)
  }

  return api[method](url, data)
}
