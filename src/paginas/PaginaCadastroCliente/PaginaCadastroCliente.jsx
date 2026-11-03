import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara } from "../../utils/formatarComMascara";
import { MASCARA_TELEFONE } from "../../utils/formatarComMascara";
import { MASCARA_CPF } from "../../utils/formatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";
import { salvarCliente } from "../../servicos/clientes.servico";

function PaginaCadastroCliente(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [DataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");

    /* dentro da variavel const salvar temos as validações, o objeto cliente, console, salvarCliente e toast.success. */
    const salvar = () => {
        /* validações das informações digitadas nos inputs.*/
        if(!nome.trim() || !email.trim()){
            toast.error("o campos nome e email são obrigatórios");
            return;
        }

        if(!validarEmail(email)){
            toast.error("email invalido")
        }

        if(cpf.trim() && !validarCPF(cpf)){
            toast.error("CPF invalido!");
            return;
        }

        /* variavel que é um objeto que recebe as informações digitadas nos inputs.*/
            const cliente = {
            nome,
            email,
            DataNascimento,
            telefone,
            cpf,
        };

        /*o console.log mostra as informações no console do navegador. o salvarCliente salva as informações no localStotage. o toast.success mostra uma mensagem indicando que o salvamento das informações no localStorage e a visualização no console foram efetuados com sucesso.*/
        console.log(cliente);
        salvarCliente(cliente);
        toast.success("cliente salvo com sucesso")
    };

    // const deletar = (id) => {
    //     const listaClientes = buscarClientes();
    //     if (confirm("deseja realmente remover a tarefa?")) {
    //      const tarefasDeletadas = listaClientes.filter((item) => item.id !== id);
    //      setNome(tarefasDeletadas);
    //      setEmail(tarefasDeletadas);
    //      setDataNascimento(tarefasDeletadas);
    //      setTelefone(tarefasDeletadas);
    //      setCpf(tarefasDeletadas);
    //      salvarCliente("tarefas", tarefasDeletadas);
    //      toast.success("tarefa removida");
    //      }
    //     };


    return <Principal titulo="novo cliente">
        <CampoCustomizado label="Nome" value={nome} onChange={ (e) => setNome(e.target.value)} maxLength={50}/>

        <CampoCustomizado label="Email" value={email} onChange={ (e) => setEmail(e.target.value)}/>

        <CampoCustomizado label="Data de Nascimento" type="date" value={DataNascimento} onChange={ (e) => setDataNascimento(e.target.value)}/>

        <CampoCustomizado label="Telefone" type="tel" value={telefone} onChange={ (e) => setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))}/>

        <CampoCustomizado label="CPF" value={cpf} onChange={ (e) => setCpf(formatarComMascara(e.target.value, MASCARA_CPF))}/>

        <BotaoCustomizado tipo="primario" aoClicar={salvar}>salvar</BotaoCustomizado>
    </Principal>

}

export default PaginaCadastroCliente;

