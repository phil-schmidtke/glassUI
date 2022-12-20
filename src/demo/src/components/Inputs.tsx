export default function Inputs() {
    return (
        <div className="mt-4">
            <h1 className="ml-2">Inputs</h1>
            <div className="">
                <div className="flex">
                    <input className="input block" placeholder="Input" />
                    <input className="input-sm ml-2" placeholder="Medium Input" />
                </div>
                <div className="flex mt-2">
                    <input className="input-outline" placeholder="Outline Input" />
                    <input className="input-outline-sm ml-2" placeholder="Medium Outline Input" />
                </div>
            </div>
        </div>
    )
}