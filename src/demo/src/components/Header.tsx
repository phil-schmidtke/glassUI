export default function Header() {
    return (
        <div className="mt-4">
            <h2 className="ml-2">Header</h2>
            <div className="header flex">
                <div className="mx-auto">
                    <div className="flex">
                        <a className="nav-link">Link</a>
                        <a className="nav-link-underline">Link</a>
                        <a className="nav-link-underline-active">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}