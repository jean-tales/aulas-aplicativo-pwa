import Paginainicial from './paginas/Paginainicial/Paginainicial';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaCadastroCliente from './paginas/PaginaCadastroCliente/PaginaCadastroCliente';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <Paginainicial />,
 },
 {
    path: 'lista-produtos',
    element: <PaginaListaProdutos />,
 },
 {
    path: 'lista-tarefas',
    element: <PaginaListaTarefas />,
 },
 {
    path: 'cadastro-cliente',
    element: <PaginaCadastroCliente/>,
 },

]);


function Roteador(){
    return  <RouterProvider router={roteador} />;
}

export default Roteador;

/* o componente roteador está sendo renderizado junto com cabecalho e rodape no app.jsx. a variavel const roteador armazena as rotas das paginas. path é o nome dado para rota e elemente é o componente que vai ser chamado quando o nome da rota for usado.*/