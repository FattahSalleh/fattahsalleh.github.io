import { FC, useState } from 'react';
import { PRACTICE } from '../../constants/path.constant';
import { COMPONENT_NOT_FOUND } from '../../constants/practice.constants';

export function Sidebar() {
  const [selectedComponent, setSelectedComponent] = useState<React.FC>(
    () => PRACTICE[0].component, // Lazy initialization
  );

  const handleComponentClick = (component: React.FC): void => {
    setSelectedComponent((prev: FC) => (prev === component ? prev : component));
  };

  return (
    <>
      <div className="absolute left-0 top-1/2">
        {PRACTICE.map((item, index) => {
          const isActive = selectedComponent === item.component;

          return (
            <div
              key={index}
              onClick={() => handleComponentClick(item.component)}
              className={`cursor-pointer ${isActive ? 'font-bold' : ''}`}
            >
              {item.name}
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
