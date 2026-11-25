import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useEffect, useState } from "react";

function PaginaCadastroUsuario(){
    const [formUsuario, setFormUsuario] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
      });

      const salvar = () => {}

    return <Principal titulo="novo usuario">
        <CampoCustomizado label="nome" type="text" value={formUsuario.nome} onChange={(e) => setFormUsuario({...formUsuario, nome: e.target.value})}/>
        <CampoCustomizado label="email" type="text" value={formUsuario.email}/>
        <CampoCustomizado label="senha" type="text" value={formUsuario.senha}/>
        <CampoCustomizado label="confirmar senha" type="text" value={formUsuario.confirmarSenha}/>
        <BotaoCustomizado>salvar</BotaoCustomizado>
    </Principal>
}

export default PaginaCadastroUsuario