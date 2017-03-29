import validation from './payments-validation.component.js'

export default {
  mounted() {
    this.validateUrl()
  },
  data () {
    return {
      module: 'Payments',
      body: this.validateUrl()
    }      
  },
  methods: {
    validateUrl () {
      let referrer = document.referrer
      let url = this.$route.query.source
      return validation.methods.isValidUrl(url, referrer)
    }
  }
}
