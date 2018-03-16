import React from 'react'
import { connect } from 'react-redux'
import { Image, View } from 'react-native'
import { Container, Form, Item, Icon, Button } from 'native-base'
import { AppConst, ImageConst } from '../../../configs'
import { TextUpperCase, SystemInput } from '../../../components'
import actions from './sauce'
import styles from './style'

class LoginScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      email: 'admin@imed.com.vn',
      password: '123456'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccessfully) {
      this.props.navigation.navigate(AppConst.screens.main)
    }
  }

  login = () => {
    const { email, password } = this.state
    this.props.attemptLogin(email, password)
  }

  render() {
    const { isFetching } = this.props

    return (
      <Container>
        <View style={{ width: '100%', height: '100%' }}>
          <Image
            source={ImageConst.image.loginBackground}
            style={styles.backgroundImage}
          />
          <View
            style={styles.wrapper}
          >
            <Image
              source={ImageConst.image.appLogo}
              style={styles.logo}
            />
            <Form
              style={styles.form}
            >
              <Item
                style={styles.formItem}
              >
                <Icon
                  style={styles.formItemEmailIcon}
                  active
                  name="email-outline"
                />
                <SystemInput
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  disabled={isFetching}
                />
              </Item>
              <Item
                style={{ ...styles.formItem, ...styles.formItemPassword }}
              >
                <Icon
                  active
                  name="lock-outline"
                />
                <SystemInput
                  secureTextEntry
                  placeholder="Mật khẩu"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  disabled={isFetching}
                />
              </Item>
            </Form>
            <Button
              full
              iconRight
              disabled={isFetching}
              style={styles.btnLogin}
              onPress={() => this.login()}
            >
              <TextUpperCase text="Đăng nhập" />
              <Icon name="login" />
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.login.isFetching,
    loginSuccessfully: state.login.loginSuccessfully
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (email, password) => dispatch(actions.login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
