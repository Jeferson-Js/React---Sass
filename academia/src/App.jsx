import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import "./sass/app.sass"

const App = () => {
  return (
    <div id='portifolio'>
      <h1>Jeferson Santos Oliveira</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App