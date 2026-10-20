import "./CampoCustomizado.css";

function CampoCustomizado(props){
    return <div className="CampoCustomizado_root">
        <span>
            {props.label}
        </span>
        <input {...props} className="CampoCustomizado_input" />
        
    </div>
}

export default CampoCustomizado;

// pode escrever as propriedades uma a uma oa invés de usar o ...props que copia todas as propriedades de uma vez e passa para o imput.