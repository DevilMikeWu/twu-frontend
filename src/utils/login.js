export const checkAccountValidation = (account) => {
  if (typeof account !== 'string') return false

  var reg = /^[a-zA-Z0-9]{2,20}$/;
  if (reg.test(account)) {
    return true
  } else {
    return false
  }
}

export const checkPasswordValidation = (password) => {
  if (typeof password !== 'string') return false

  var reg = /^[\w!@#$%^&*,.?]{8,20}$/;
  if (reg.test(password)) {
    return true
  } else {
    return false
  }
}