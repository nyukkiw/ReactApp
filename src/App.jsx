import './App.css'
import Home from "./pages/index"
function App() {
  const value = false;

  return (
    <div className="App">
     {value ? 'benar' : 'salah'}
      <Home/>
      
    </div>
  )
}

export default App
