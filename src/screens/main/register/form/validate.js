import { MessageConst } from '../../../../configs'
import { validate } from '../../../../utils'

const NAME_MIN_LENGTH = 2
const COMPANY_MIN_LENGTH = 2

export default (data) => {
  const { name, company, email, phone, event, plan } = data
  let msg = ''

  if (!name || name.length < NAME_MIN_LENGTH) {
    msg = MessageConst.Register.Form.NameMinLength(NAME_MIN_LENGTH)
  } else if (!company || company.length < COMPANY_MIN_LENGTH) {
    msg = MessageConst.Register.Form.CompanyMinLength(COMPANY_MIN_LENGTH)
  } else if (!email || !validate.isValidEmail(email)) {
    msg = MessageConst.Register.Form.InvalidEmail
  } else if (phone && !validate.isValidPhone(phone)) {
    msg = MessageConst.Register.Form.InvalidPhone
  } else if (event && !plan) {
    msg = MessageConst.Register.Form.InvalidPlan
  }

  return msg
}
