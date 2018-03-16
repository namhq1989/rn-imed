const METHODS = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}

export default {
  methods: METHODS,
  common: {
    login: () => {
      return {
        url: '/login',
        method: METHODS.post
      }
    }
  },
  register: {
    data: () => {
      return {
        url: '/data',
        method: METHODS.get
      }
    },
    createCustomer: () => {
      return {
        url: '/customers',
        method: METHODS.post
      }
    }
  }
}
