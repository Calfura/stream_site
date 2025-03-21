import { Route, Routes } from "react-router-dom";
import "./styles/App.css"
import Template from "./pages/_TempatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
