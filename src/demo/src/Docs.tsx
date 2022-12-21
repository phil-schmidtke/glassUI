import { useState } from "react";
import Sidebar from "./components/Sidebar";

type actives = 'getting_started' | 'colors' | 'utilities' | 'button_standart' | 'button_outline' | 'card_standart' | 'card_light' | 'card_outline' | 'input_standart' | 'input_outline' | 'header_basic' | 'nav_standart' | 'nav_underline' | 'nav_underline_active' | 'code_preview_basic'

export default function Docs() {
    const [active, setActive] = useState<actives>('getting_started')

    return (
        <div className="flex">
            <Sidebar active={active} setActive={setActive} />

            <main className="fixed left-32 sm:left-60 overflow-y-scroll w-full">
                {active === 'getting_started' && <div>Getting Started</div>}
                {active === 'colors' && <div>Colors</div>}
                {active === 'utilities' && <div>Utilities</div>}
                {active === 'button_standart' && <div>Button Standart</div>}
                {active === 'button_outline' && <div>Button Outline</div>}
                {active === 'card_standart' && <div>Card Standart</div>}
                {active === 'card_light' && <div>Card Light</div>}
                {active === 'card_outline' && <div>Card Outline</div>}
                {active === 'input_standart' && <div>Input Standart</div>}
                {active === 'input_outline' && <div>Input Outline</div>}
                {active === 'header_basic' && <div>Header Basic</div>}
                {active === 'nav_standart' && <div>Nav Standart</div>}
                {active === 'nav_underline' && <div>Nav Underline</div>}
                {active === 'nav_underline_active' && <div>Nav Underline Active</div>}
                {active === 'code_preview_basic' && <div>Code Preview Basic</div>}
            </main>
        </div>
    )
}