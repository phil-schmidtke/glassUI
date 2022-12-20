
function App() {

  return (
    <div className="m-4">
      <div className="my-4">
        <div className="flex">
          <div>
            <h2 className="text-md sm:text-lg">Button</h2>
            <div className="mb-2">
              <button className="btn">Standart Button</button>
            </div>
            <div className="my-2">
              <button className="btn-md">Medium Button</button>
            </div>
            <div className="my-2">
              <button className="btn-sm">Small Button</button>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-md sm:text-lg">Button Outline</h2>
            <div className="mb-2">
              <button className="btn-outline">Standart Button</button>
            </div>
            <div className="my-2">
              <button className="btn-outline-md">Medium Button</button>
            </div>
            <div className="my-2">
              <button className="btn-outline-sm">Small Button</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-md sm:text-lg ml-4 mb-2">Cards</h2>
        <div className="flex justify-between">
          <div className="w-full mx-2">
            <div className="card">
              <h3 className="text-center font-bold">Card</h3>
              <p className="text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae tempora eligendi voluptates sunt illum iusto libero. Architecto mollitia maiores nisi excepturi, quidem molestiae atque ab accusamus! Libero tempora culpa natus!</p>
            </div>
          </div>
          <div className="w-full mx-2">
            <div className="card-light">
              <h3 className="text-center font-bold">Card Light</h3>
              <p className="text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae tempora eligendi voluptates sunt illum iusto libero. Architecto mollitia maiores nisi excepturi, quidem molestiae atque ab accusamus! Libero tempora culpa natus!</p>
            </div>
          </div>
          <div className="w-full mx-2">
            <div className="card-outline">
              <h3 className="text-center font-bold">Card Outline</h3>
              <p className="text-center mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae tempora eligendi voluptates sunt illum iusto libero. Architecto mollitia maiores nisi excepturi, quidem molestiae atque ab accusamus! Libero tempora culpa natus!</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="m-2 mt-4">Inputs</h1>
        <div className="flex">
          <div className="block">
            <input placeholder="Standart Input" className="input block" />
            <input placeholder="Outline Input" className="input-outline mt-2" />
          </div>
          <div className="ml-4">
            <input placeholder="Standart Input" className="input-sm block" />
            <input placeholder="Outline Input" className="input-outline-sm mt-2" />
          </div>
        </div>
      </div>
      <div className="my-4">
        <div>
          <h1>Header / Navbar</h1>
          <div className="header">
            <h1 className="text-center">Header</h1>
          </div>
        </div>
      </div>
      <h1 className="text-lg">Header Links</h1>
      <div className="mt-2 flex justify-between w-1/2">
        <div className="mt-2">
          <h2>Standard</h2>
          <a className="nav-link text-xl">Link</a>
        </div>
        <div className="mt-2">
          <h2>Underline</h2>
          <a className="nav-link-underline text-xl">Link</a>
        </div>
        <div className="mt-2">
          <h2>Underline Active</h2>
          <a className="nav-link-underline-active text-xl">Link</a>
        </div>
      </div>
    </div>
  )
}

export default App
