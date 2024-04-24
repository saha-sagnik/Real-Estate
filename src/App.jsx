import '../src/styles/layout.scss'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'

function App() {
  return (
    
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
        <Homepage/>
      </div>
      
    </div>
  )
}

export default App