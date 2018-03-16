import React from 'react'
import PropTypes from 'prop-types'
import lodash from 'lodash'
import { View } from 'react-native'
import { Form, Item, Icon, Button } from 'native-base'
import { AppConst } from '../../../../configs'
import { SystemPicker, SystemInput, TextUpperCase, SystemToast } from '../../../../components'
import { platform } from '../../../../utils'
import validation from './validate'
import styles from './style'

class FormCreateCustomer extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Nam',
      phone: '',
      company: 'Zody',
      email: '',
      event: '',
      plan: '',
      listPlansOfEvent: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCreateCustomerSuccessfully) {
      this.resetState()
      this.props.onClearedForm()
    }
  }

  // Selected an event
  onEventSelect = (event) => {
    console.log('event selected', event)
    if (!event) {
      return
    }
    this.setState({ event }, () => {
      const obj = lodash.find(this.props.data.events, item => item._id === event)
      if (obj.plans) {
        this.setState({
          listPlansOfEvent: obj.plans
        })
      }
    })
  }

  // Selected a plan
  onPlanSelect = (plan) => {
    this.setState({ plan })
  }

  // Reset form data
  resetState = () => {
    this.setState({
      name: '',
      phone: '',
      company: '',
      email: '',
      event: '',
      plan: '',
      listPlansOfEvent: []
    })
  }

  // Create new customer
  create = () => {
    const msg = validation(this.state)
    if (msg) {
      return SystemToast.danger(msg, AppConst.toast.positions.top)
    }

    const obj = lodash.pick(Object.assign({}, this.state), ['name', 'phone', 'company', 'email', 'event', 'plan'])
    this.props.onSubmitCustomerData(obj)
  }

  render() {
    const { isFetching, data } = this.props

    // Modified events array, for Android display
    const events = data.events.asMutable().slice(0)
    if (!platform.iOS()) {
      events.unshift({
        _id: '',
        name: 'Chọn sự kiện'
      })
    }

    return (
      <View style={{ width: '100%' }}>
        <Form style={styles.form}>
          <Item style={{ ...styles.formItem, marginTop: 40 }}>
            <Icon
              style={[styles.formItemIconMargin, styles.formItemIcon]}
              active
              name="account-outline"
            />
            <SystemInput
              placeholder="Họ tên"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              disabled={isFetching}
            />
          </Item>
          <Item style={styles.formItem}>
            <Icon
              style={{ ...styles.formItemIcon }}
              active
              name="domain"
            />
            <SystemInput
              placeholder="Công ty"
              onChangeText={company => this.setState({ company })}
              value={this.state.company}
              disabled={isFetching}
            />
          </Item>
          <Item style={styles.formItem}>
            <Icon
              style={styles.formItemIcon}
              active
              name="cellphone-iphone"
            />
            <SystemInput
              keyboardType="phone-pad"
              returnKeyType="done"
              placeholder="Số điện thoại"
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
              disabled={isFetching}
            />
          </Item>
          <Item style={styles.formItem}>
            <Icon
              style={[styles.formItemIconMargin, styles.formItemIcon]}
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
          <Item style={styles.formItem}>
            <Icon
              style={[styles.formItemIconMargin, styles.formItemIcon]}
              active
              name="calendar"
            />
            <SystemPicker
              placeholder="Chọn Sự kiện"
              iosHeader="Sự kiện"
              enabled={events.length}
              selectedValue={this.state.event}
              options={events.map(item => lodash.pick(item, ['_id', 'name']))}
              onSelect={this.onEventSelect}
            />
          </Item>
          {
            this.state.event
            ?
              <Item style={styles.formItem}>
                <Icon
                  style={[styles.formItemIconMargin, styles.formItemIcon]}
                  active
                  name="buffer"
                />
                <SystemPicker
                  placeholder="Gói khách hàng"
                  iosHeader="Gói khách hàng"
                  selectedValue={this.state.plan}
                  options={this.state.listPlansOfEvent}
                  onSelect={this.onPlanSelect}
                />
              </Item>
            :
              null
          }
        </Form>
        <View style={styles.buttonGroup}>
          <View style={styles.flex1}>
            <Button
              bordered
              disabled={isFetching}
              style={[styles.button, styles.buttonReset]}
              onPress={() => this.resetState()}
            >
              <TextUpperCase text="Reset" style={styles.buttonResetText} />
            </Button>
          </View>
          <View style={styles.flex1}>
            <Button
              disabled={isFetching}
              style={[styles.button, styles.buttonCreate]}
              onPress={() => this.create()}
            >
              <TextUpperCase text="Tạo" />
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

FormCreateCustomer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isCreateCustomerSuccessfully: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onSubmitCustomerData: PropTypes.func.isRequired,
  onClearedForm: PropTypes.func.isRequired
}

export default FormCreateCustomer
