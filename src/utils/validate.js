import { AppConst } from '../configs'

/**
 * Check email is valid or not
 *
 * @param {String} email
 */
const isValidEmail = (str) => {
  return AppConst.regex.email.test(str)
}

/**
 * Check phone is valid or not
 *
 * @param {String} phone
 */
const isValidPhone = (str) => {
  return AppConst.regex.phone.test(str)
}

export default {
  isValidEmail,
  isValidPhone
}
