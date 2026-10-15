import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/principal/principal";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const adicionarTarefa = () => {};

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <input
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
    </Principal>
  );
}

export default PaginaListaTarefas;
