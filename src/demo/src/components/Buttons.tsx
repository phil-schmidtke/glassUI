export default function Buttons() {
    return (
        <div className="block md:flex">
            <div>
                <h2 className="ml-2 mb-1">Buttons</h2>
                <button className="btn mx-1">Standart Button</button>
                <button className="btn-md mx-1">Medium Button</button>
                <button className="btn-sm mx-1">Small Button</button>
            </div>
            <div className="md:ml-2 mt-2 md:mt-0">
                <h2 className="ml-2 mb-1">Outline Buttons</h2>
                <button className="btn-outline mx-1">Standart Button</button>
                <button className="btn-outline-md mx-1">Medium Button</button>
                <button className="btn-outline-sm mx-1">Small Button</button>
            </div>
        </div>
    )
}
