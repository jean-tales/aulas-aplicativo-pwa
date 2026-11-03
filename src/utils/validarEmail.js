function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export default validarEmail;

/* código para verificar se o email digitado no input e válido. esse codigo é usado no componente PaginaCadastroCliente.*/
