import { StackNavigator, SwitchNavigator } from 'react-navigation'
import { AppConst, CssConst } from './configs'

// Screens
import SplashScreen from './screens/splash'
import { SystemCamera } from './screens/system/camera'
import { LoginScreen } from './screens/auth/login'
import { HomeScreen } from './screens/main/home'
import { RegisterScreen } from './screens/main/register'
import { HistoriesScreen } from './screens/main/histories'

const stackNavigatorOptions = {
  navigationOptions: {
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
      textAlign: 'center',
      flex: 1,
      fontSize: CssConst.attribute.titleFontSize
    },
    headerStyle: {
      backgroundColor: CssConst.color.primary
    }
  }
}

const MainStack = StackNavigator({
  [AppConst.screens.home]: HomeScreen,
  [AppConst.screens.register]: RegisterScreen,
  [AppConst.screens.histories]: HistoriesScreen,
  [AppConst.screens.camera]: SystemCamera
}, stackNavigatorOptions)

const AuthStack = StackNavigator({
  [AppConst.screens.login]: LoginScreen
}, {
  navigationOptions: {
    header: null
  }
})

const RootStack = SwitchNavigator({
  [AppConst.screens.main]: MainStack,
  [AppConst.screens.auth]: AuthStack,
  [AppConst.screens.splash]: SplashScreen
}, {
  initialRouteName: AppConst.screens.splash
})

export default RootStack
