var crypto = require('crypto')

export const encode = (type, value) => {
  return crypto.createHash(type).update(value).digest('hex')
}
