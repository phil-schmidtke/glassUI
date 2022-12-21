import { useState } from "react"
import Components from "./Components"
import HeaderContent from "./components/HeaderContent"
import Docs from "./Docs"

function App() {
  const [active, setActive] = useState('home')

  return (
    <div>
      <div className='header'>
        <HeaderContent active={active} setActive={setActive} />
      </div>
      <main>
        {active === 'home' && <div>Home</div>}
        {active === 'components' && <Components />}
        {active === 'docs' && <Docs />}
      </main>
    </div>
  )
}

export default App
