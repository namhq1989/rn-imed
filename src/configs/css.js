import { Platform } from 'react-native'

const platform = Platform.OS
const ios = 'ios'

const iOS = () => {
  return platform === ios
}

export default {
  attribute: {
    fontRegular: 'iCielPanton',
    fontBold: 'iCielPanton-Bold',
    fontLight: 'iCielPanton-Light',
    fontSizeBase: 12,
    defaultFontSize: 15,
    titleFontSize: iOS() ? 17 : 19,
    iconFontSize: iOS() ? 30 : 28
  },
  color: {
    primary: '#008437'
  }
}
