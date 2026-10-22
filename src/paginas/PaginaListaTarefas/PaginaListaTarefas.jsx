import "./PaginaListaTarefas.css";
import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrashAlt } from "react-icons/fa";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    // tarefas.push(descricaoTarefa)
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
    } else {
      alert("tarefa obrigatória");
    }
  };

  const removerTarefa = (id) => {
    if (confirm("deseja realmente remover a tarefa?")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
    }
  };

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

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            {item.descricao}{" "}
            <FaTrashAlt color="blue" onClick={() => removerTarefa(item.id)} />
          </div>
        );
      })}

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
