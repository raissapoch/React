import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.alterado(evento.target.value)
    }

    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto