import { Link } from "react-router-dom";
import "./Principal.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Principal(props) {
  return <main className="Principal_root">
    <div className="Principal_titulo">
      {props.voltarPara && <Link to={props.voltarPara}> <IoArrowBackCircleSharp size={24}/> </Link>} 

      <h2>{props.titulo}</h2>
    </div>
    
    {props.children}
    
    </main>;
}

export default Principal;
/* {props.childrem} está acessando o conteúdo interno de <Principal> <Principal/> no componente Paginainicial.jsx */
