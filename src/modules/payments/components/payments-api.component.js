import validation from './payments-validation.component.js'
import $ from 'jquery'

export default {
  mounted () {
    //  this.appendingStripeConfiguration()
  },
  data () {
    return {
      module: 'Payments',
      jwtsecret: '',
      data: {},
      payments: {},
      dolaramount: 0,
      total: 0,
      idtransaction: '',
      payuparameters: {},
      body: this.validateUrlAndDecodeToken().vb
    }
  },
  methods: {
    validateUrlAndDecodeToken () {
      let referrer = document.referrer
      let url = this.$route.query.source
      var data = validation.methods.isValidUrl(url, referrer)
      this.httpRequest(data.token_reference)
      return data
    },
    payStripe () {
      $('.stripe-button-el').click()
    },
    stripeConfiguration (data) {
      var key = ''
      for (var i=0 ; i<data.length; i++) {
        if(data[i].name === 'stripe') {
          key = data[i].api_key
        }
      }
      /*  =============== Payment Script ===============  */
      var paymentStripeForm = document.createElement('form')
      paymentStripeForm.setAttribute('method', 'post')
      paymentStripeForm.setAttribute('id', 'paymentStripeForm')
      paymentStripeForm.setAttribute('action', 'http://devcheckout.joinnus.com/api/v1/payment/stripe/store')
      paymentStripeForm.setAttribute('style', 'display:none')
      document.body.appendChild(paymentStripeForm)

      var amount = document.createElement('input')
      amount.setAttribute('type', 'hidden')
      amount.setAttribute('name', 'transaction')
      amount.setAttribute('value', this.idtransaction)

      var paymentscript = document.createElement('script')
      paymentscript.type = 'text/javascript'
      paymentscript.src = 'https://checkout.stripe.com/checkout.js'
      paymentscript.setAttribute('class', 'stripe-button')
      paymentscript.setAttribute('data-key', key)
      paymentscript.setAttribute('data-amount', this.dolaramount)
      paymentscript.setAttribute('data-name', 'Joinnus!')
      paymentscript.setAttribute('data-description', 'abc')
      paymentscript.setAttribute('data-image', 'https://www.joinnus.com/inc/img/logo-square.png')
      paymentscript.setAttribute('data-locale', 'auto')
      paymentscript.setAttribute('data-zip-code', 'false')
      paymentStripeForm.appendChild(amount)
      paymentStripeForm.appendChild(paymentscript)
    },
    httpRequest (token) {
      this.$http.post('http://devcheckout.joinnus.com/api/v1/reservation', {details: token}).then(response => {
        //  console.log(response.body)
        this.jwtsecret = response.body[0].xml
        this.data = response.body[0].data[0]
        this.total = response.body[0].total * 100
        this.dolaramount = Math.round((response.body[0].total * 100)/3.25)
        this.idtransaction = response.body[0].code
        this.stripeConfiguration(this.data.event_config_marcas)
        this.generatePaymentMethods(this.data.event_config_marcas)
        }, response => {
          console.log('error')
          console.log(response)
        });
    },
    generatePaymentMethods (data) {
      var paymentobject = {}
      for(var i = 0; i<data.length; i++) {
        paymentobject[data[i].name] = true
      }
      this.payments  = paymentobject
    },
    sendPayuRequest() {
      var token = validation.methods.encryptData(this.payuparameters, this.jwtsecret)
      this.$http.post('http://devcheckout.joinnus.com/api/v1/payment/payu/store', { details: token}).then(response => {
        console.log(response)
      })
    }
  }
}

