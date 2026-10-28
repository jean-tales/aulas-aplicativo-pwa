import "./BotaoCustomizado.css";

function BotaoCustomizado(props){
   const classes = ["BotaoCustomizado_root"];

  switch (props.tipo) {
    case "primario":
      classes.push("BotaoCustomizado_primario");
      break;
    case "secundario":
      classes.push("BotaoCustomizado_secundario");
      break;
    default:
      break;
  }

 return (
    <button className={classes.join(" ")} onClick={props.aoClicar}>
      {props.children}
    </button>
   );

// return <button className="BotaoCustomizado_root" onClick={props.aoClicar}>{props.children}</button>;
}

export default BotaoCustomizado;

/*o componente BotaoCustomizado está sendo chamado dentro do componente Paginainicial. ele recebe as propriedades primario e secundario. o BotaoCustomizado recebe essas prorieadades por meio do parametro props e usa essas proriedades no swith. no swith, se a propriedade for primario, recebe uma determinada estilização, se for secundario vai receber outra estilização.*/