EXPORTED_SYMBOLS=["replStore"];


var data = null;

replStore = {
	get: function() {
		return data;
  },
  
	set: function(d) {
		data=d;
  }
}
