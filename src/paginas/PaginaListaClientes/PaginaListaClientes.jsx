import "./PaginaListaClientes.css"
import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { buscarClientes } from "../../servicos/clientes.servico";
import { BsFillTrash3Fill } from "react-icons/bs";


function PaginaListaClientes(){
     const listaClientes = buscarClientes();

    return <Principal titulo="lista dos clientes" voltarPara="/">
        {listaClientes.map((item, index) =>{
            return <div key={index} className="PaginaListaClientes_cliente">
              <div className="PaginaListaClientes_item">
                 <strong>{item.nome}</strong>
                 <strong>{item.email}</strong>
                 <strong>{item.DataNascimento}</strong>
                 <strong>{item.telefone}</strong>
                 <strong>{item.cpf}</strong>
              </div>
                <BsFillTrash3Fill  />
            </div>
        })}

        <BotaoCustomizado tipo="primario">
            excluir cliente
        </BotaoCustomizado>
    </Principal>
}
/* o componente PaginaListaClientes esta mostrando as informações cadastradas no componente PaginaCadastroCliente.*/



export default PaginaListaClientes;