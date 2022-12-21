import { useState } from "react";
import Sidebar from "./components/Sidebar";

type actives = 'getting_started' | 'colors' | 'utilities' | 'button_standart' | 'button_outline' | 'card_standart' | 'card_light' | 'card_outline' | 'input_standart' | 'input_outline' | 'header_basic' | 'nav_standart' | 'nav_underline' | 'nav_underline_active' | 'code_preview_basic'

export default function Docs() {
    const [active, setActive] = useState<actives>('getting_started')

    return (
        <div className="flex">
            <Sidebar active={active} setActive={setActive} />

            <main className="fixed left-60 overflow-y-hidden">
                content
            </main>
        </div>
    )
}