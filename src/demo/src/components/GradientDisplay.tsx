export default function GradientDisplay () {
    return (
        <div className="mt-4">
            <h2 className="text-xl ml-2">Gradient Backgrounds</h2>
            <div className="flex">
                <div className="bg-1 rounded-xl w-full h-80 border-4 border-white hover:opacity-80 z-20">
                    <div className="flex">
                        <button className="btn-outline mx-auto mt-32 items-center h-full">
                            View
                        </button>
                    </div>
                </div>
                <div className="bg-2 rounded-xl w-full h-80 border-4 border-white ml-4">
                    <div className="flex">
                        <button className="btn-outline mx-auto mt-32 items-center h-full">
                            View
                        </button>
                    </div>
                </div>
                <div className="bg-3 rounded-xl w-full h-80 border-4 border-white ml-4">
                    <div className="flex">
                        <button className="btn-outline mx-auto mt-32 items-center h-full">
                            View
                        </button>
                    </div>
                </div>
                <div className="bg-4 rounded-xl w-full h-80 border-4 border-white ml-4">
                    <div className="flex">
                        <button className="btn-outline mx-auto mt-32 items-center h-full">
                            View
                        </button>
                    </div>
                </div>
                <div className="bg-5 rounded-xl w-full h-80 border-4 border-white ml-4">
                    <div className="flex">
                        <button className="btn-outline mx-auto mt-32 items-center h-full">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}