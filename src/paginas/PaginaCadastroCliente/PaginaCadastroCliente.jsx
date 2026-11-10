/* eslint-disable react-hooks/set-state-in-effect */
import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useEffect, useState } from "react";
import { formatarComMascara } from "../../utils/formatarComMascara";
import { MASCARA_TELEFONE } from "../../utils/formatarComMascara";
import { MASCARA_CPF } from "../../utils/formatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";
import { buscarClientes, salvarCliente } from "../../servicos/clientes.servico";
import { useNavigate, useParams } from "react-router-dom";

function PaginaCadastroCliente() {
   const navigate = useNavigate();
  const [formCliente, setFormCliente] = useState({
    id: "",
    nome: "",
    email: "",
    DataNascimento: "",
    telefone: "",
    cpf: "",
  });

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const clienteParaEditar = buscarClientes().find(
        (item) => item.id === +params.id,
      );
      if (clienteParaEditar) {
        setFormCliente(clienteParaEditar);
      }
    }
  }, [params.id]);

  /* dentro da variavel const salvar temos as validações, o objeto cliente, console, salvarCliente e toast.success. */
  const salvar = () => {
    /* validações das informações digitadas nos inputs.*/
    if (!formCliente.nome.trim() || !formCliente.email.trim()) {
      toast.error("o campos nome e email são obrigatórios");
      return;
    }

    if (!validarEmail(formCliente.email)) {
      toast.error("email invalido");
    }

    if (formCliente.cpf.trim() && !validarCPF(formCliente.cpf)) {
      toast.error("CPF invalido!");
      return;
    }

    salvarCliente(formCliente);
    toast.success("cliente salvo com sucesso");
    navigate('/lista-clientes');

    /* variavel que é um objeto que recebe as informações digitadas nos inputs.*/
    // const cliente = {
    //   ...formCliente,
    //   id: Date.now(),
    // };


    /*o console.log mostra as informações no console do navegador. o salvarCliente salva as informações no localStotage. o toast.success mostra uma mensagem indicando que o salvamento das informações no localStorage e a visualização no console foram efetuados com sucesso.*/
    // console.log(cliente);
    // salvarCliente(cliente);
    // toast.success("cliente salvo com sucesso");
    
  };

  const titulo = formCliente.id ? "editar cliente" : "novo cliente";

  return (
    <Principal titulo={titulo} voltarPara="/">
      <CampoCustomizado
        label="Nome"
        value={formCliente.nome}
        onChange={(e) =>
          setFormCliente({ ...formCliente, nome: e.target.value })
        }
        maxLength={50}
      />

      <CampoCustomizado
        label="Email"
        value={formCliente.email}
        onChange={(e) =>
          setFormCliente({ ...formCliente, email: e.target.value })
        }
      />

      <CampoCustomizado
        label="Data de Nascimento"
        type="date"
        value={formCliente.DataNascimento}
        onChange={(e) =>
          setFormCliente({ ...formCliente, DataNascimento: e.target.value })
        }
      />

      <CampoCustomizado
        label="Telefone"
        type="tel"
        value={formCliente.telefone}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            telefone: formatarComMascara(e.target.value, MASCARA_TELEFONE),
          })
        }
      />

      <CampoCustomizado
        label="CPF"
        value={formCliente.cpf}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            cpf: formatarComMascara(e.target.value, MASCARA_CPF),
          })
        }
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
