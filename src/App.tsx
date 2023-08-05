import {Routes, Route} from "react-router-dom"
import Counter from "./page/Counter" 
import Quiz from "./page/Quiz"
import Modal from "./page/Modal" 
import Home from "./page/Home" 
import List from "./page/List"
import Curencyconvertor from "./page/Curency-convertor"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/user" element={<List/>}/>
      <Route path="/curencyconvertor" element={<Curencyconvertor/>}/>
    </Routes>
  )
}
export default App