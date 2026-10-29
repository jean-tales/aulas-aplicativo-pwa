import "./PaginaListaTarefas.css";
import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrashAlt } from "react-icons/fa";
import { buscarNoLocalStorage, salvarNoLocalStorage } from "../../servicos/localstorage.servico";
import { toast } from 'react-toastify';

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState(buscarNoLocalStorage("tarefas") || []);
  /*descriaoTarefa e usado para armazenar as imformações digitadas. o estádo inicial é vazio.*/
  /*tarefas é um array que vai receber as informaões do descricaoTarefa*/

  const adicionarTarefa = () => {
    // tarefas.push(descricaoTarefa)
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
      salvarNoLocalStorage("tarefas", [...tarefas, novaTarefa])
      toast.success("tarefa adicionada");
    } else {
      toast.error("Preencha os campos obrigatórios!");
    }
  };
  /*no adicionarTarefa é adicionado no array tarefas o objeto novaTarefa que tem as propriedades id e descricao. setTarefas faz uma cópia do array tarefas para ser renderizado. setDescricaoTarefa("") controla o estado inicial do imput que está inicialmente vazio. quando o  setDescricaoTarefa("") é chamado, o imput volta para o estado inicial limpado o imput.*/


  const removerTarefa = (id) => {
    if (confirm("deseja realmente remover a tarefa?")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
      salvarNoLocalStorage("tarefas", tarefasAtualizadas);
      toast.success("tarefa removida");
    }
  };
  /*no removerTarefa é passado a informacão item.id da linha 59 para o parâmetro genérico (id) da variavel. dentro do if tem uma variavel chamada tarefasAtualizadas. dentro da variavel, o array tarefas está sendo filtrado para poder excluir um item com id.   */

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">

      <CampoCustomizado
        label="tarefa"
        type="text"
        placeholder="Digite uma tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {
          setDescricaoTarefa(evento.target.value);
        }}
      />
      {/*o CampoCustomizado é o input que recebe as propriedades label, type, placeholder, value, onChange.
      o value serve para controlar o input. onChange serve para atualizar o que está sendo digitado no input.  */}


      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar tarefa
      </BotaoCustomizado>
      {/* botão para adidionar uma tarefa. recebe uma propriedade que contem a variavel adicionarTarefa.*/}

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            {item.descricao}{" "}
            <FaTrashAlt color="blue" onClick={() => removerTarefa(item.id)} />
          </div>
        );
      })}
      {/* array tarefas sendo mapeado para ter acesso as informações dentro dele. dentro da função arrow, está sendo retornada uma div que mostra um item que tem dentro do array tarefas e um icone com nome de FaTrashAlt.*/}

      {!tarefas.length && (
        <span className="PaginaListaTarefas_vazia">
          nenhuma tarefa cadastrada.
        </span>
      )}

    </Principal>
  );

}

export default PaginaListaTarefas;

// .trim limpa os espaços ao redor de uma string.

/* const tarefasAtualizadas = [...tarefas, novaTarefa];
setTarefas(tarefasAtualizadas); */