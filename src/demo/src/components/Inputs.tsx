export default function Inputs() {
    return (
        <div className="mt-4">
            <h1 className="ml-2">Inputs</h1>
            <div className="">
                <div className="block sm:flex">
                    <input className="input block w-full" placeholder="Input" />
                    <input className="input-sm mt-2 sm:mt-0 sm:ml-2 w-full" placeholder="Medium Input" />
                </div>
                <div className="block sm:flex mt-2">
                    <input className="input-outline block w-full" placeholder="Outline Input" />
                    <input className="input-outline-sm mt-2 sm:mt-0 sm:ml-2 w-full" placeholder="Medium Outline Input" />
                </div>
            </div>
        </div>
    )
}