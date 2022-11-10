//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  console.log(props.corData.corHexadecimal)
  let cor = "#" + props.corData.corHexadecimal
  return (
    <div className="card-container" style={{backgroundColor:cor}}>
      <div className="card-body">
        <h1>Cor: {props.corData.nomeCor}</h1>
        <span>Código da cor: {cor}</span>
      </div>
    </div>
  )
}