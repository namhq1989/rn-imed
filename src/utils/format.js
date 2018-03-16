import moment from 'moment'
import { AppConst } from '../configs'

/**
 * Uppercase first letter of string
 *
 * @param {String} string
 */
const capitalize = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Format date picker text to readable string
 *
 * @param {String} date
 */
const date = (str = '') => {
  if (!str) {
    return ''
  }

  return capitalize(moment(str).format(AppConst.format.date))
}

export default {
  capitalize,
  date
}
