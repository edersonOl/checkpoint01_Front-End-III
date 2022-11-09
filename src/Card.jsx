//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div className="card-container">
      <div className="card-body">
        <h1>Cor: {props.corData.nomeCor}</h1>
        <span>Código da cor: {props.corData.corHexadecimal}</span>
      </div>
    </div>
  )
}