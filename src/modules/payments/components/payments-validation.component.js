import jwt from 'jsonwebtoken'

export default {
  data () {
    return {
      data1: 'hola',
      show: false
    }
  },
  methods: {
    isValidUrl (url, referrer) {
      if (url === '' || url === undefined) {
        alert('url inválida')
        window.history.back()
      } else {
        return this.decryptToken(url)
      }
    },
    decryptToken (token) {
      jwt.verify(token, 'I Love Alessia', function (err, decoded) {
        if (err) {
          alert('Error en secret')
          window.history.back()
        }
      })
      return true
    }
  }
}
