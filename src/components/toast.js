import { Toast } from 'native-base'
import { AppConst } from '../configs'

const show = (options) => {
  Toast.show(options)
}

export default {
  success: (text, position = AppConst.toast.positions.bottom, buttonText = AppConst.toast.buttonText) => {
    show({
      text,
      position,
      buttonText,
      type: AppConst.toast.types.success,
      duration: AppConst.toast.durations.success
    })
  },
  danger: (text, position = AppConst.toast.positions.bottom, buttonText = AppConst.toast.buttonText) => {
    show({
      text,
      position,
      buttonText,
      type: AppConst.toast.types.danger,
      duration: AppConst.toast.durations.danger
    })
  },
  warning: (text, position = AppConst.toast.positions.bottom, buttonText = AppConst.toast.buttonText) => {
    show({
      text,
      position,
      buttonText,
      type: AppConst.toast.types.warning,
      duration: AppConst.toast.durations.warning
    })
  }
}
