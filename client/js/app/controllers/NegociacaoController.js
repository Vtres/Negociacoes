class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegocicoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		
		this._negociacoesView.update(this._listaNegocicoes);
	}

	adiciona(event){
		event.preventDefault();
		
		this._listaNegocicoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegocicoes);
		this._limpaFormulario();

		console.log(this._listaNegocicoes.negociacao);
	}

	_criaNegociacao(){
		return new Negociacao(
		 	DateHelper.textoParaData(this._inputData.value),
		 	this._inputQuantidade.value,
		 	this._inputValor.value
		);
	}

	_limpaFormulario(){
		this._inputData.value ='';
		this._inputQuantidade.value=1;
		this._inputValor.value=0.0;

		this._inputData.focus();
	}

}