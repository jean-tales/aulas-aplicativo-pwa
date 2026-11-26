import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../../servicos/usuarios.servico";

function PaginaLogin() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    senha: "",
  });

  const entrar = () => {
    try {
      if (!formLogin.email || formLogin.senha) {
        throw new Error("preencha todos os campos");
      }

      loginUsuario(formLogin);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Principal>
      <h2 className="">login</h2>
      <CampoCustomizado
        label="email"
        type="email"
        value={formLogin.email}
        onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })}
      />
      <CampoCustomizado
        label="senha"
        type="password"
        value={formLogin.senha}
        onChange={(e) => setFormLogin({ ...formLogin, senha: e.target.value })}
      />
      <BotaoCustomizado tipo="primario" aoClicar={entrar}>
        Entrar
      </BotaoCustomizado>

      <span className="">
        não tem conta? <Link to="/cadastro-usuario">cadastre_se</Link>
      </span>
    </Principal>
  );
}

export default PaginaLogin;
