export default function Code() {
    return (
        <div>
            <div className="mt-4">
                <h2 className="ml-2">Code Display</h2>
                <div className="code">
                    <div className="flex">
                        <div className="code-dot"></div>
                        <div className="code-dot"></div>
                        <div className="code-dot"></div>
                    </div>
                    <div className="code-line mt-4">
                        <a className="ml-2"><span className="text-green-500 font-bold text-lg mr-2">$</span> npm i tailwind-glass</a>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="ml-2">Code Display</h2>
                <div className="code">
                    <div className="flex">
                        <div className="code-dot"></div>
                        <div className="code-dot"></div>
                        <div className="code-dot"></div>
                    </div>
                    <div className="code-line mt-4">
                        <a className="ml-2"><span className="text-gray-500 font-bold text-lg mr-2">1</span> class="code"</a>
                    </div>
                    <div className="code-line">
                        <a className="ml-2"><span className="text-gray-500 font-bold text-lg mr-2">2</span> class="code-dot"</a>
                    </div>
                    <div className="code-line">
                        <a className="ml-2"><span className="text-gray-500 font-bold text-lg mr-2">3</span> class="code-line"</a>
                    </div>
                </div>
            </div>
        </div>
    )
}