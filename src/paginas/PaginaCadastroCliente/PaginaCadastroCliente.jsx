import Principal from "../../componentes/principal/principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara } from "../../utils/formatarComMascara";
import { MASCARA_TELEFONE } from "../../utils/formatarComMascara";

function PaginaCadastroCliente(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [DataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");

    const salvar = () => {
        const cliente = {
            nome,
            email,
            DataNascimento,
            telefone,
            cpf,
        };
        console.log(cliente);
    };

    return <Principal titulo="novo cliente">
        <CampoCustomizado label="Nome" value={nome} onChange={ (e) => setNome(e.target.value)} maxLength={50}/>
        <CampoCustomizado label="Email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
        <CampoCustomizado label="Data de Nascimento" type="date" value={DataNascimento} onChange={ (e) => setDataNascimento(e.target.value)}/>
        <CampoCustomizado label="Telefone" type="tel" value={telefone} onChange={  (e) => setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))}/>
        <CampoCustomizado label="CPF" value={cpf} onChange={ (e) => setCpf(e.target.value)}/>

        <BotaoCustomizado tipo="primario" aoClicar={salvar}>salvar</BotaoCustomizado>
    </Principal>

}

export default PaginaCadastroCliente;