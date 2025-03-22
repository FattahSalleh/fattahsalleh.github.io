import { FC, useState } from "react";
import { PRACTICE_COMPONENT_MAP, PRACTICE_NAME } from "../../constants/path.constant";

export function Sidebar() {
    const [selectedComponent, setSelectedComponent] = useState<React.FC>(() => PRACTICE_COMPONENT_MAP["Rating Star"]);

    const handleComponentClick = (component: React.FC): void => {
        setSelectedComponent((prev: FC<{}>) => prev === component ? prev: component);
    };

    return (
        <div className="absolute left-0 top-1/2">
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
    );
}
