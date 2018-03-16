export default {
  ServerError: 'Đã có lỗi xảy ra, vui lòng thử lại!',
  NoPermission: 'Bạn không có quyền thực hiện hành động này, vui lòng liên hệ với Zody để biết thêm chi tiết!',

  // Auth
  Login: {
    RequireEmailAndPassword: 'Vui lòng điền đầy đủ thông tin đăng nhập',
    EmailIsNotValid: 'Email không đúng định dạng',
    PasswordLengthLeastCharacters: 'Mật khẩu phải có ít nhất 6 ký tự',
    UserBanned: 'Tài khoản của bạn đã bị khoá, vui lòng liên hệ với Zody để biết thêm chi tiết!'
  },

  Home: {
    Logout: {
      Buttons: ['Đồng ý', 'Huỷ'],
      Title: 'Bạn có muốn đăng xuất?',
      CancelIndex: 1
    }
  },

  // Register
  Register: {
    Form: {
      NameMinLength: length => `Tên khách hàng phải ít nhất ${length} ký tự`,
      CompanyMinLength: length => `Tên công ty phải ít nhất ${length} ký tự`,
      InvalidEmail: 'Email không đúng định dạng',
      InvalidPhone: 'Số điện thoại không đúng định dạng',
      InvalidPlan: 'Vui lòng chọn Gói sự kiện',
      CreateCustomerSuccessfully: 'Tạo khách hàng thành công'
    }
  }
}
