import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// @ts-ignore
import ParticleBackground from 'react-particle-backgrounds'
import './index.css'

const settings = {
  particle: {
    particleCount: 75,
    color: "#fff",
    minSize: 1,
    maxSize: 8
  },
  velocity: {
    minSpeed: 0.2,
    maxSpeed: 0.4
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.6,
    opacityTransitionTime: 10000
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='absolute w-screen h-screen'>
      <ParticleBackground settings={settings} />
    </div>
    <App />
  </React.StrictMode>,
)
