export default function Code() {
    return (
        <div className="mt-4">
            <h2 className="ml-2">Code Display</h2>
            <div className="code">
                <div className="flex">
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                </div>
                <div className="code-line">
                    <a className="ml-2"><span className="text-green-500 font-bold text-lg mr-2">$</span> npm i tailwind-glass</a>
                </div>
            </div>
        </div>
    )
}