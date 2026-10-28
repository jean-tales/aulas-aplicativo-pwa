import "./Avatar.css"

function Avatar(props){
    
  const nomes = props.nome.split(" "); //divide o nome joão bilu em em array ['joão', 'bilu']

  const primeiroNome = nomes[0]; // joão
  const primeiraLetraPrimeiroNome = primeiroNome[0]; // 'j'

  let primeiraLetraUltimoNome = ""; // vazio
  if (nomes.length > 1) {
    const ultimoNome = nomes[1] // bilu
    primeiraLetraUltimoNome = ultimoNome[0]; // 'b'
  }

  return <div className="Avatar_root"> 
        {primeiraLetraPrimeiroNome + primeiraLetraUltimoNome} 
   </div>
   // j + b
}

export default Avatar;

/* o componente avatar é o elemento circular que fica no canto superior direito da tela e tem as iniciais jb.*/