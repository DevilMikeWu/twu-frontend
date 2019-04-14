export const checkAccountValidation = (account) => {
  var reg = /^[a-zA-Z0-9]{2,20}$/;
  return checkValidation(account, reg)
}

export const checkPasswordValidation = (password) => {
  var reg = /^[\w!@#$%^&*,.?]{8,20}$/;
  return checkValidation(password, reg)
}

export const checkValidation = (content, regExp) => {
  if (typeof content !== 'string') return false

  return regExp.test(content)
}