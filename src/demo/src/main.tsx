import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ParticlesBg from 'particles-bg'
import './index.css'

let config = {
  num: [1, 3],
  rps: 0.2,
  radius: [3, 20],
  life: [1.5, 10],
  v: [0.01, 0.03],
  tha: [-10, 10],
  alpha: [0.4, 0],
  scale: [.1, 0.9],
  position: "all",
  color: ["random", "#FFFFFF"],
  cross: "dead",
  random: 8,
  g: 0.2,
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='absolute w-screen h-screen'>
    <ParticlesBg type="custom" bg={false} config={config} />
    </div>
    <App />
  </React.StrictMode>,
)
