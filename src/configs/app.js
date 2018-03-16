const STORAGE_PREFIX = (process.env.NODE_ENV === 'production') ? 'imed-' : 'imed-dev-'

export default {
  endpoint: 'http://192.168.20.67:3000',
  // endpoint: 'https://api.imed.com.vn',

  // Screen key
  screens: {
    splash: 'SPLASH',
    camera: 'CAMERA',
    auth: 'AUTH',
    main: 'MAIN',
    login: 'LOGIN',
    home: 'HOME',
    register: 'REGISTER',
    checkin: 'CHECKIN',
    histories: 'HISTORIES'
  },

  // Local storage
  storage: {
    authKey: `${STORAGE_PREFIX}token`,
    infoKey: `${STORAGE_PREFIX}info`,
  },

  // Toast
  toast: {
    buttonText: 'OK',
    positions: {
      top: 'top',
      bottom: 'bottom'
    },
    types: {
      danger: 'danger',
      success: 'success',
      warning: 'warning'
    },
    durations: {
      default: 3000,
      success: 3000,
      danger: 7000,
      warning: 5000
    }
  },

  // Format
  format: {
    date: 'dddd, D MMMM[/]YYYY'
  },

  // Regex
  regex: {
    email: /\S+@\S+\.\S+/,
    phone: /^\+?1?(\d{10,12}$)/
  }
}
