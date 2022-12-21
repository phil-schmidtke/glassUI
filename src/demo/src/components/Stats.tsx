export default function Stats() {
    return (
        <div className="mt-8">
            <h2 className="text-xl ml-2">Stat Cards</h2>
            <div className="flex">
                <div className="card w-1/5">
                    <div className="text-gray-300 text-lg">
                        Income
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-xl font-bold mt-2">543,54 €</h1>
                        </div>
                        <div className="stat-negative w-28">
                            <span className="font-bold">25 %</span>
                        <svg className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1v2.59l-6.29-6.3a1,1,0,0,0-1.42,0L9,11.59,3.71,6.29A1,1,0,0,0,2.29,7.71l6,6a1,1,0,0,0,1.42,0L13,10.41,18.59,16H16a1,1,0,0,0,0,2h5a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,17V12A1,1,0,0,0,21,11Z" fill="white"></path></svg>
                    </div>
                    </div>  
                </div>
                <div className="card w-1/5 ml-8">
                    <div className="text-gray-300 text-lg">
                        Income
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-xl font-bold mt-2">543,54 €</h1>
                        </div>
                        <div className="stat-positive w-28">
                            <span className="font-bold">25 %</span>
                        <svg className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,11a1,1,0,0,0-1,1v2.59l-6.29-6.3a1,1,0,0,0-1.42,0L9,11.59,3.71,6.29A1,1,0,0,0,2.29,7.71l6,6a1,1,0,0,0,1.42,0L13,10.41,18.59,16H16a1,1,0,0,0,0,2h5a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,17V12A1,1,0,0,0,21,11Z" fill="white"></path></svg>
                    </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}