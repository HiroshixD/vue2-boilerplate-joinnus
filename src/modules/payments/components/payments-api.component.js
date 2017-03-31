import validation from './payments-validation.component.js'
import $ from 'jquery'

export default {
  mounted() {
    this.validateUrl(),
    this.appendingStripe()
  },
  data () {
    return {
      module: 'Payments',
      body: this.validateUrl(),
    }      
  },
  methods: {
    validateUrl () {
      let referrer = document.referrer
      let url = this.$route.query.source
      var hola = validation.methods.isValidUrl(url, referrer)
      return validation.methods.isValidUrl(url, referrer)
    },
    payStripe () {
      $('.stripe-button-el').click();
    },
    appendingStripe () {
      /*===============
        Payment Scripts
        ===============*/
      var paymentStripeForm = document.createElement("form");
      paymentStripeForm.setAttribute('method',"post");
      paymentStripeForm.setAttribute('id', 'paymentStripeForm');
      paymentStripeForm.setAttribute('action',"/holi");

      var paymentscript = document.createElement("script");
      paymentscript.type = "text/javascript";
      paymentscript.src = "https://checkout.stripe.com/checkout.js" ;        
      paymentscript.setAttribute('class', 'stripe-button');
      paymentscript.setAttribute('data-key', 'pk_test_6pRNASCoBOKtIshFeQd4XMUh');
      paymentscript.setAttribute('data-amount', '999');
      paymentscript.setAttribute('data-name','Joinnus!');
      paymentscript.setAttribute('data-description', 'holi');
      paymentscript.setAttribute('data-image','https://stripe.com/img/documentation/checkout/marketplace.png');
      paymentscript.setAttribute('data-locale','auto');
      paymentscript.setAttribute('data-zip-code', 'true');
      paymentStripeForm.appendChild(paymentscript);
    }
  }
}

