import Titulo from "./Titulo"

function App(){
  return (
  <div>
    <Titulo cor="red" nome="Wesley" paragrafo={false}/>
    <Titulo nome="Alex" paragrafo={true}/>
    <Titulo />
  </div>
  )
}

export default App