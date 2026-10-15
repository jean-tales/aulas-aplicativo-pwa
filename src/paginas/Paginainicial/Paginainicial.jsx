import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

import { useNavigate } from 'react-router-dom';

function Paginainicial() {
  const navigate = useNavigate();

  return (
    <Principal titulo= "página inicial">
      conteúdo principal
      <br />
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => alert("salvar clicado!")}
      >
        salvar
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => alert("cancelar clicado!")}
      >
        cancelar
      </BotaoCustomizado>

      <BotaoCustomizado aoClicar={() => navigate('/lista-produtos')}>
        lista de produtos
      </BotaoCustomizado>

      <BotaoCustomizado tipo="secundario" aoClicar={() => navigate('/lista-tarefas')}>
        lista de tarefas
      </BotaoCustomizado>
    </Principal>
  );
}

export default Paginainicial;
