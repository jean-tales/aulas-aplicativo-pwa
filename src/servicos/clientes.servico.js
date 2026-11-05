import { salvarNoLocalStorage } from "./localstorage.servico";
import { buscarNoLocalStorage } from "./localstorage.servico";
 
 export const salvarCliente = (cliente) => {
    const clientes = buscarNoLocalStorage("clientes") || [];
    if(!cliente.id) {
      cliente.id = Date.now();
      clientes.push(cliente);
    } else {
      const index = clientes.findIndex(() => cliente.id === cliente.id);
      cliente[index] = cliente;
    }

    salvarNoLocalStorage("clientes", clientes)
 }



export const buscarClientes = () => {
   return buscarNoLocalStorage("clientes") || [];
}








// function salvarCliente(cliente) {
//     const clientes = buscarNoLocalStorage("clientes") || [];
//     clientes.push(cliente);
//     salvarNoLocalStorage("clientes", clientes);
// }

// export {salvarCliente}