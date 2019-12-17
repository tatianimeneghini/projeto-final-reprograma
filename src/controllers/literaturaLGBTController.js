const literaturaLGBTCollection = require('../model/literaturaLGBTSchema');

exports.get = (request, response) => {
    console.log(request.url);
    response.status(200).send(livro)
};

const getAll = (request, response) => {
    literaturaLGBTCollection.find((error, livro) => {
        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send(livro)
        }
    })
};

const getTitulo = (request, response) => {
    const titulo = request.params.titulo;
    const regex = new RegExp(titulo, "i");
    const tituloFiltrado = { "titulo": regex };
    literaturaLGBTCollection.find(tituloFiltrado, (error, titulo) => { 
        if(error){
            return response.send("O livro não foi encontrado em nosso sistema. Inserir sem acento.") 
        } else {
            return response.status(200).send(titulo)
        }
    })
};

const getAutoria = (request, response) => {
    const autoria = request.params.autoria;
    const regex = new RegExp(autoria, "i");
    const autoriaFiltrada = { "autoria": regex };
    literaturaLGBTCollection.find(autoriaFiltrada, (error, autoria) => { 
        if(error){
            return response.send("A autoria não está no nosso sistema.") 
        } else {
            return response.status(200).send(autoria)
        }
    })
};

const getEstiloNarrativo = (request, response) => {
    const estiloNarrativo = request.params.estiloNarrativo;
    const regex = new RegExp(estiloNarrativo, "i");
    const estiloNarrativoFiltrado = { "estiloNarrativo": regex };
    literaturaLGBTCollection.find(estiloNarrativoFiltrado, (error, estiloNarrativo) => {
        if(error){
            return response.status(404).send("Não possuimos nenhum estilo literário no Bando de Dados")
        } else {
            return response.status(200).send(estiloNarrativo)
        }
    })
};

const getGeneroLiteratura = (request, response) => {
    const generoLiterario = request.params.generoLiterario;
    const regex = new RegExp(generoLiterario, "i");
    const generoLiterarioFiltrado = { "generoLiterario": regex };
    literaturaLGBTCollection.find(generoLiterarioFiltrado, (error, generoLiterario) => {
        if(error){
            return response.send("Nenhum cadastro do gênero literário solicitado.")
        } else {
            return response.status(200).send(generoLiterario)
        }
    })
};

const criarLivro = (request, response) => {
    const novoTitulo = request.body
    const livro = new literaturaLGBTCollection( novoTitulo )
    livro.save((error) => {
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(201).send(livro)
        }
    })
}

const atualizarLivro = (request, response) => {
    const id = request.params.id;
    const atualizacaoLivro = request.body;
    const options = {new:true}
    literaturaLGBTCollection.findByIdAndUpdate(id, atualizacaoLivro, options, (error, livro) => {
        if(error){
            return response.status(500).send("O livro não encontrado!")
        } else {
            return response.status(404).send(livro)
        }
    })
}

const deletarLivro = (request, response) => {
    const id = request.params.id
    literaturaLGBTCollection.findByIdAndRemove(id, (error, livro) => {
        if(error){
            return response.status(500).send(error)
        } else if(livro){
            return response.status(200).send("Livro excluído.")
        } else {
            return response.sendStatus(404)
        }
    })
}

module.exports = {
    getAll,
    getTitulo,
    getAutoria,
    getEstiloNarrativo,
    getGeneroLiteratura,
    criarLivro,
    atualizarLivro,
    deletarLivro
}