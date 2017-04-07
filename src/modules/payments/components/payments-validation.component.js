import jwt from 'jsonwebtoken'

export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    isValidUrl (url, referrer) {
      if (url === '' || url === undefined) {
        alert('url inválida')
        window.history.back()
      } else {
        return this.decryptToken(url, 'jnputin')
      }
    },
    decryptToken (token, key) {
      let decoded = {}
      let errortoken = {}
      try {
        decoded = jwt.verify(token, key)
        decoded['vb'] = true
        decoded['token_reference'] = token
        return decoded
      } catch (err) {
        errortoken['vb'] = false
        window.history.back()
        return errortoken
      }
    },
    encryptData (data, secret) {
      data.credit_card = data.credit_card.replace(/\s/g, '')
      var token = jwt.sign(data, secret)
      return token
    }
  }
}
