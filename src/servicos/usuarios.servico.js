import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "./localstorage.servico";

import md5 from 'js-md5';

export const novoUsuario = (usuario) => {
  const usuarios = buscarNoLocalStorage("usuarios") || [];

  const usuarioJaCadastrado = usuarios.some((u) => u.email === usuario.email);

  if (usuarioJaCadastrado) {
    throw new Error("Usuário já cadastrado.");
  }

  usuario.senha = md5(usuario.senha);
  delete usuario.confirmarSenha;
  usuario.id = Date.now();
  usuarios.push(usuario);
  salvarNoLocalStorage("usuarios", usuarios);
};

export const loginUsuario = (usuario) => {
  const usuarios = buscarNoLocalStorage("usuarios") || [];

  const usuarioEncontrado = usuarios.find(
    (u) => u.email === usuario.email && u.senha === md5(usuario.senha)
  );

  if(!usuarioEncontrado) {
     throw new Error("Email ou senha invalidos.");
  }

  salvarNoLocalStorage("usuarioLogado", usuarioEncontrado);
}

export const buscarUsuarioLogado = () => {
  return buscarNoLocalStorage("usuarioLogado");
}