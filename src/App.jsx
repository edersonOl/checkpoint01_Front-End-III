import { useState } from 'react'
import { Card } from './Card'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function validationNameColor(nomeCor) {
  return nomeCor.trim().length > 3
}

function validationColorHex(corHexa) {
  const padrao = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let erro = false;
  let haveNumber = false;

  if (corHexa.trim().length < 6) return false;

  corHexa.toUpperCase().split('').map(char => {
    if (!padrao.includes(char)) {
      erro = true
    }
    haveNumber = haveNumber ? true : !isNaN(Number(char))
  })

  if (!haveNumber) erro = true
 
  return !erro
}

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nameColor, setNameColor] = useState('');
  const [codeColor, setCodeColor] = useState('');
  const [allColors, setAllColors] = useState([]);
  const [formularioErro, setFormularioErro] = useState(false)

  function addCor(event) {
    event.preventDefault()
    let error = false;

    const newColor = {
      nomeCor: nameColor,
      corHexadecimal: codeColor
    }

    error = !validationNameColor(nameColor) || !validationColorHex(codeColor)

    setFormularioErro(error)
    if (!error) {
      setAllColors([...allColors, newColor]);
      setNameColor('');
      setCodeColor('');
    }
  }

  return (
    <div className="App">
      <h1>ADICIONAR NOVA COR</h1>
      <form className="formCadastro" onSubmit={event => addCor(event)}>
        <div>
          <label htmlFor="nameColor">Nome</label>
          <input type="text" className="form-control" value={nameColor} onChange={event => setNameColor(event.target.value)}
            placeholder="Insira o nome da cor" />
          <label htmlFor="codeColor">Cor</label>
          <input type="text" className="form-control" maxLength="6" value={codeColor} onChange={event => setCodeColor(event.target.value)}
            placeholder="Insira a sua cor no formato hexadecimal sem #" />
        </div>
        <div>
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <span>{formularioErro ? 'Por favor, verifique os dados inseridos no formulário' : ''}</span>

      <section>
        <h2>CORES FAVORITAS</h2>
        {
          allColors.map((cor, i) => {
            return (
              <Card key={i} corData={cor} />
            )
          })
        }
      </section>
    </div>
  )
}

export default App
