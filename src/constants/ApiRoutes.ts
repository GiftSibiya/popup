const ApiRoutes = {

  Users: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    verifyOtp: '/api/auth/verify',
    addCompany: '/api/auth/add_company',
    addAddress: '/api/auth/add_address',
    resendOTP: '/api/auth/resend_otp',

    getMobileUser: '/api/user/get_mobile_user',
    getMobileUsers: '/api/user/get_mobile_users',
    updateMobileUser: '/api/user/update_mobile_user',
    deleteMobileUser: '/api/user/delete_mobile_user',
    registerMobileUser: '/api/user/register_mobile_user',
    verifyMobileUser: '/api/user/verify_mobile_user',
  },
  ProductTypes: {
    getProductTypes: '/api/product-types/types',
  },
  Products: {
    getProducts: '/api/products/products',
  },
  Payments: {
    makePayment: 'api/payments/make_payment'
  }


}

export default ApiRoutes;