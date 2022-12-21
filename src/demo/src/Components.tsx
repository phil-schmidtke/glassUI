import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Code from "./components/Code";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Stats from "./components/Stats";

export default function Components() {
    return (
        <div className="mx-2 sm:mx-4">
            <h1 className="text-lg font-bold mt-2 sm:mt-4">Components</h1>
            <div className="mt-4">
                <div className="pb-12">
                    <Buttons />
                    <Cards />
                    <Inputs />
                    <Header />
                    <Code />
                    <Stats />
                </div>
            </div>
        </div>
    )
}