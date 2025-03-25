import { FC, useState } from 'react';
import { PRACTICE } from '../../constants/path.constant';
import { COMPONENT_NOT_FOUND } from '../../constants/practice.constants';

export function Sidebar() {
  const [selectedComponent, setSelectedComponent] = useState<React.FC>(
    () => PRACTICE.components['Rating Star'], // Lazy initialization
  );

  const handleComponentClick = (component: React.FC): void => {
    setSelectedComponent((prev: FC<{}>) => (prev === component ? prev : component));
  };

  return (
    <>
      <div className="absolute left-0 top-1/2">
        {PRACTICE.names.map((name, index) => {
          const isActive = PRACTICE.components[name] === selectedComponent;

          return (
            <div
              key={index}
              onClick={() => handleComponentClick(PRACTICE.components[name])}
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
        {selectedComponent ? selectedComponent({}) : <p>{COMPONENT_NOT_FOUND}</p>}
      </section>
    </>
  );
}
