export default function Cards() {
    return (
        <div>
            <h2 className="ml-2">Cards</h2>
            <div className="mt-4 md:flex">
                <div className="w-full md:mx-2">
                    <div className="card">Card</div>
                </div>
                <div className="w-full md:mx-2 mt-4 md:mt-0">
                    <div className="card-light">Card Light</div>
                </div>
                <div className="w-full md:mx-2 mt-4 md:mt-0">
                    <div className="card-outline">Outline Card</div>
                </div>
            </div>
        </div>
    )
}