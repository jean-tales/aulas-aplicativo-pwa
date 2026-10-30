import "./PaginaListaClientes.css"
import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { buscarClientes } from "../../servicos/clientes.servico";

function PaginaListaClientes(){
     const listaClientes = buscarClientes();

    return <Principal titulo="lista dos clientes" voltarPara="/">
        {listaClientes.map((item, index) =>{
            return <div key={index} className="PaginaListaClientes_item">
                <strong>{item.nome}</strong>
                <strong>{item.email}</strong>
            </div>
        })}

        <BotaoCustomizado tipo="primario">
            excluir cliente
        </BotaoCustomizado>

       


    </Principal>

}

export default PaginaListaClientes;