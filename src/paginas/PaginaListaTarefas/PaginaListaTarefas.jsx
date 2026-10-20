import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    tarefas.push(descricaoTarefa)
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">

      <CampoCustomizado label="tarefa"  type="text"
        placeholder="Digite uma tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {
          setDescricaoTarefa(evento.target.value);
        }}/> 

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return <li>{item}</li>
      })}
    </Principal>
  );
}

export default PaginaListaTarefas;
