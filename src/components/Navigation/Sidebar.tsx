import { useState } from "react";
import { PRACTICE_COMPONENT_MAP, PRACTICE_NAME } from "../../constants/path.constant";

export function Sidebar() {
    const [selectedComponent, setSelectedComponent] = useState<() => JSX.Element>(() => PRACTICE_COMPONENT_MAP["Rating Star"]);

    const handleComponentClick = (component: () => JSX.Element): void => {
        setSelectedComponent((prev) => prev === component ? prev : component);
    };

    return (
        <>        <div className="absolute left-0 top-1/2">
            {PRACTICE_NAME.map((name, index) => {
                const isActive = PRACTICE_COMPONENT_MAP[name] === selectedComponent;

                return (
                    <div
                        key={index}
                        onClick={() => handleComponentClick(PRACTICE_COMPONENT_MAP[name])}
                        className={`cursor-pointer ${isActive ? 'font-bold' : ''}`}
                    >
                        {name}
                    </div>
                );
            })}
        </div>
            <section
                className="w-full h-[calc(100dvh)] lg:min-h-screen flex flex-col items-center justify-center text-center"
                id="introSection"
            >
                {selectedComponent()}
            </section>
        </>
    );
}
