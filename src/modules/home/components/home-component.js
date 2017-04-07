
export default {	
    data() {
      return {
        msg: 'Home',
	    user: {}     
      }
    },    
    methods: {
      	getData() {
      	  	var horasalida = new Date().getTime()
		  // GET /someUrl
		    this.$http.get('http://localhost:3000/api/articles').then(response => {
		    // get body data
		    	this.someData = response.body;
		    	console.log(this.someData)

		  	}, response => {
		    // error callback
		  	});
		},
		retrieveData(user) {
		  console.log(user);
		}
    }
  }
