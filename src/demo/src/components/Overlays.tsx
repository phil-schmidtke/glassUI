import { useState } from "react"

export default function() {
    const [open, setOpen] = useState(false)
    return (
        <div className="mt-4">
            <h2 className="text-xl ml-2">Overlays</h2>
            <button className="btn-outline ml-4 mt-2" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            {open && <div className="overlay">
                    <button onClick={() => setOpen(false)} className="fixed right-10 top-10 text-black text-4xl font-extrabold cursor-pointer">X</button>
                    <div className="flex">
                        <div className="mx-auto mt-40 text-black">
                            <h1 className="text-4xl font-bold">Menu</h1>
                            <div className="mt-4 block">
                                <a className="nav-link-underline text-2xl text-black block">Link</a>
                                <a className="nav-link-underline text-2xl text-black block">Link</a>
                                <a className="nav-link-underline text-2xl text-black block">Link</a>
                                <a className="nav-link-underline text-2xl text-black block">Link</a>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}