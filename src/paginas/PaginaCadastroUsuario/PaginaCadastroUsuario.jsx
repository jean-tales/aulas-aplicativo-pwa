import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { toast } from "react-toastify";
import { novoUsuario } from "../../servicos/usuarios.servico";
import validarEmail from "../../utils/validarEmail";
import { useNavigate } from "react-router-dom";

function PaginaCadastroUsuario() {
  const navigate = useNavigate();
  const [formUsuario, setFormUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const salvar = () => {
    try {
      if (
        !formUsuario.nome.trim() ||
        !formUsuario.email.trim() ||
        !formUsuario.senha.trim()
      ) {
        toast.error("Preencha todos os campos.");
        return;
      }

      if (!validarEmail(formUsuario.email)) {
       toast.error("email invalido");
      }

      if (formUsuario.senha !== formUsuario.confirmarSenha) {
        toast.error("As senhas não coincidem.");
        return;
      }

      novoUsuario(formUsuario);
      toast.success("Usuário cadastrado com sucesso!");
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Principal titulo="novo usuario" voltarPara="/login">
      <CampoCustomizado
        label="nome"
        type="text"
        value={formUsuario.nome}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, nome: e.target.value })
        }
      />
      <CampoCustomizado
        label="email"
        type="email"
        value={formUsuario.email}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, email: e.target.value })
        }
      />
      <CampoCustomizado
        label="senha"
        type="password"
        value={formUsuario.senha}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, senha: e.target.value })
        }
      />
      <CampoCustomizado
        label="confirmar senha"
        type="password"
        value={formUsuario.confirmarSenha}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, confirmarSenha: e.target.value })
        }
      />
      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroUsuario;
