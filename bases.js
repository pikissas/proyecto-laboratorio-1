const persona = [
	{
		nombre: "LAURA",
		edad: 25
	},
	{
		nombre: "SOFIA",
		edad: 21
	},
	{
		nombre: "FRANCISCO",
		edad: 28
	},
	{
		nombre: "CLARA",
		edad: 45
	}
] ;
function ejPersona() {
	return new Promise( (resolve,reject) => {
		if( persona.length < 1 ) {
			reject( new Error( "No existen personas" ) ) ;
		}
		setTimeout( () => {resolve(persona);},2000 ) ;
	}) ;
}
function ejVar() {
	ejPersona()
	.then( (rta) => {
		console.log( "rta=" + JSON.stringify(rta) ) ;
	} )
	.catch( (error) => {
		console.log( "Error:" + error ) ;
	} ) ;
	
	console.log( "FIN" ) ;
}