import { useState } from "react"

export default function MobileMenus() {
    const [open, setOpen] = useState(false)

    return (
        <div className="mt-4">
            <div>
                <h2 className="ml-2 mb-1">Mobile Menus</h2>
                {open ? <button className="btn-outline" onClick={() => setOpen(false)}>
                    Disable Mobile Menu
                </button> : <button className="btn-outline" onClick={() => setOpen(true)}>
                    Activate Mobile Menu
                </button>}
            </div>
            {open && <div className="mobile-menu h-16"><div className="text-center mt-4 text-xl font-bold text-gray-600">Mobile Menu</div></div>}
        </div>
    )
}