import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Code from "./components/Code";
import GradientDisplay from "./components/GradientDisplay";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import MobileMenus from "./components/MobileMenus";
import Overlays from "./components/Overlays";
import Stats from "./components/Stats";

export default function Components() {
    return (
        <div className="mx-2 sm:mx-4">
            <h1 className="text-lg font-bold mt-2 sm:mt-4">Components</h1>
            <div className="mt-4">
                <div className="pb-20">
                    <Buttons />
                    <Cards />
                    <Inputs />
                    <Header />
                    <Code />
                    <Stats />
                    <Overlays />
                    <MobileMenus />
                    <GradientDisplay />
                </div>
            </div>
        </div>
    )
}