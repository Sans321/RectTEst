import {Routes, Route} from "react-router-dom"
import Counter from "./page/Counter" 
import Quiz from "./page/Quiz"
import Modal from "./page/Modal" 
import Home from "./page/Home" 
import List from "./page/List"
import Curencyconvertor from "./page/Curency-convertor"
import PasswordGen from "./page/Password-generator"
import Todo from "./page/Todo"
import PaperRock from "./page/Paper-rock"


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/user" element={<List/>}/>
      <Route path="/curencyconvertor" element={<Curencyconvertor/>}/>
      <Route path="/passwordgenerator" element={<PasswordGen/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/paperrock" element={<PaperRock/>}/>

    </Routes>
  )
}
export default App