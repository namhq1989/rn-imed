import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const plaform = Platform.OS
const ios = 'ios'

const iOS = () => {
  return plaform === ios
}

const isSmallDevice = () => {
  return deviceHeight <= 560 && deviceWidth <= 320
}

const isMediumDevice = () => {
  return (deviceHeight >= 560 && deviceHeight <= 812) && (deviceWidth >= 320 && deviceWidth <= 375)
}

const isLargeDevice = () => {
  return deviceHeight >= 812 && deviceWidth >= 375
}

export default {
  iOS,
  deviceHeight,
  deviceWidth,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice
}
