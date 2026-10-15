import Paginainicial from './paginas/Paginainicial/Paginainicial';
import PaginaListaProdutos from './paginas/PaginaListaProdutos/PaginaListaProdutos';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';

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

]);


function Roteador(){
    return  <RouterProvider router={roteador} />;
}

export default Roteador;