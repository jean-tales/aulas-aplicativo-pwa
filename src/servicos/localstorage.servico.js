function buscarNoLocalStorage(chave){
    const valor = localStorage.getItem(chave);
    if(valor){
        return JSON.parse(valor);
    }
    return null;
}

function salvarNoLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor));

}

export {buscarNoLocalStorage, salvarNoLocalStorage};

/* as duas funções acima estão sendo exportadas e estão sendo usadas no componente PaginaListaTarefas.jsx*/

/* a função buscarNoLocalStorage busca os dados salvos no localStorage quando a aplicação é inicidada. se tiver dados no localStorage, os dados serão retornados e se não tiver dados, não sera retornado nada.*/

/* a função salvarNoLocalStorage salva os dados enviados da página de tarefas para o localStorage. JSON.stringify(valor) só é usado porque os dados que estão sendo salvos no localStorage estão dentro de um array.*/