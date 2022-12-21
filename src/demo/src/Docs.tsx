export default function Docs() {
    return (
        <div className="flex">
            <aside className="fixed h-screen top-16 border-r-2 w-32 sm:w-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                <h2 className="text-center mt-4 text-xl">Docs</h2>
                <div className="flex">
                    <div className="mx-auto text-center">
                        <button className="btn my-2 block w-24 sm:w-40">Getting Started</button>
                        <button className="btn my-2 block w-24 sm:w-40">Colors</button>
                        <button className="btn my-2 block w-24 sm:w-40">Utilities</button>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl text-center mt-4">Components</h2>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Buttons</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Standart</a>
                            <a className="nav-link-underline block">Outline</a>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Cards</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Standart</a>
                            <a className="nav-link-underline block">Light</a>
                            <a className="nav-link-underline block">Outline</a>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Input</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Standart</a>
                            <a className="nav-link-underline block">Outline</a>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Header</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Basic</a>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Nav Links</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Standart</a>
                            <a className="nav-link-underline block">Underline</a>
                            <a className="nav-link-underline block">Underline Active</a>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h3 className="text-lg">Code Preview</h3>
                        <div className="block my-1">
                            <a className="nav-link-underline block">Basic</a>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="fixed left-60 overflow-y-hidden">
                content
            </main>
        </div>
    )
}