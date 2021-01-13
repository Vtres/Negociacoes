class DateHelper{

	// Modos para lidar com data que vem do imput
	//.......
	// let data = new Date(this._inputData.value.replace(/-/g, ','));
	//.....
	// let data = new Date(this._inputData.value.split('-'));
	//..........
	// let data = new Date(...
	// 	this._inputData.value.split('-').map(function(item,indice){
	// 		if(indice == 1){
	// 			return item-1;
	// 		}
	// 		return item;
	// 	})
	// );
	//........
	// let data = new Date(...
	//  	this._inputData.value
	//  		.split('-')
	//  		.map(function(item,indice){
	// 	 		return item - indice % 2;
	//  	})
	// );
	//.........

	constructor(){
		throw new Error('DateHelper não pode ser instanciada');
	}
	
	static textoParaData(texto){
		return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
	}

	static dataParaTexto(data){
		return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();

       	//usando ES6 
        // return `${data.getDate()}
        // /${data.getMonth()+1}
        // /${data.getFullYear()}`;
	}
}