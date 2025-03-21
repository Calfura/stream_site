import { Route, Routes } from "react-router-dom";
import "./styles/App.css"
import Template from "./pages/_TempatePage";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Template />} >
      </Route>
    </Routes>
  )
}

export default App
