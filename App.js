import React from 'react'
import Expo from 'expo'
import { Provider } from 'react-redux'
import { Root, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
import initReduxStore from './src/redux'

// Router
import RootStack from './src/router'

// Create store
const store = initReduxStore()

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      iCielPanton: require('./src/assets/fonts/iCielPanton-Regular.ttf'),
      'iCielPanton-Light': require('./src/assets/fonts/iCielPanton-Light.ttf'),
      'iCielPanton-Bold': require('./src/assets/fonts/iCielPanton-Bold.ttf')
    })

    // Loaded fonts, start app
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            <RootStack />
          </Root>
        </StyleProvider>
      </Provider>
    )
  }
}
