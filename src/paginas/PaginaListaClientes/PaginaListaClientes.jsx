import "./PaginaListaClientes.css"
import Principal from "../../componentes/principal/principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { buscarClientes } from "../../servicos/clientes.servico";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
import { salvarNoLocalStorage } from "../../servicos/localstorage.servico";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";


function PaginaListaClientes(){
    const navigate = useNavigate();
     const [listaClientes, setListaClientes] = useState(buscarClientes());
     const [termoPesquisa, setTermoPesquisa] = useState("");


     const excluirCliente = (clientesParaExcluir) => {
       if (confirm(`deseja realmente remover o cliente: ${clientesParaExcluir.nome}`)){
        const clientesAtualizados = listaClientes.filter((item) => item.id !== clientesParaExcluir.id)
        setListaClientes(clientesAtualizados);
        salvarNoLocalStorage("clientes", clientesAtualizados);
       } 
     };


     const editarCliente = (clienteParaEditar) => {
       navigate ('/cadastro-cliente/' + clienteParaEditar.id);

     };

     const clientesFiltrados = listaClientes.filter((item) => {
      return item.nome.toLowerCase().includes(termoPesquisa)
     });

    
    return <Principal titulo="lista dos clientes" voltarPara="/">
         <CampoCustomizado label="pesquisar" placeholder="digite o nome do cliente" value={termoPesquisa} onChange={(e) => setTermoPesquisa(e.target.value)}/>
        {clientesFiltrados.map((item, index) =>{
            return <div key={index} className="PaginaListaClientes_cliente">
              <div className="PaginaListaClientes_item">
                 <strong>{item.nome}</strong>
                 <strong>{item.email}</strong>
                 <strong>{item.DataNascimento}</strong>
                 <strong>{item.telefone}</strong>
                 <strong>{item.cpf}</strong>
              </div>
                <BsFillTrash3Fill size={24} color="red" onClick={() => excluirCliente(item)} />
                <FaPencil onClick={() => editarCliente(item)} />
            </div>
        })}

        <BotaoCustomizado tipo="primario">
            excluir cliente
        </BotaoCustomizado>
    </Principal>
}
/* o componente PaginaListaClientes esta mostrando as informações cadastradas no componente PaginaCadastroCliente.*/



export default PaginaListaClientes;

