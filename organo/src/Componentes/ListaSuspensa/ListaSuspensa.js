import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.alterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa