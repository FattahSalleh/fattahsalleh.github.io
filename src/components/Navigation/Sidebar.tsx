import { FC, useEffect, useState } from 'react';
import { PATH, PRACTICE } from '../../constants/path.constant';
import { COMPONENT_NOT_FOUND } from '../../constants/practice.constants';
import { useNavigate, useParams } from 'react-router-dom';
import { convertStringDashToSpace, convertStringSpaceToDash } from '../../utils/utils';

export function Sidebar() {
  const navigate = useNavigate();
  const { componentName } = useParams<{ componentName?: string }>();

  // Convert URL component name to match PRACTICE format
  // If does not match, default to Rating Star component
  const formattedName = componentName ? convertStringDashToSpace(componentName) : 'Rating Star';

  // Find the component that matches the URL component name
  const defaultComponent = PRACTICE.find(item => item.name === formattedName)?.component ?? null;

  const [selectedComponent, setSelectedComponent] = useState<React.FC | null>(
    () => PRACTICE[0].component || null, // Lazy initialization
  );

  useEffect(() => {
    if (!defaultComponent) {
      navigate(PATH.PRACTICE_RATING_STAR, { replace: true });
    } else {
      setSelectedComponent(() => defaultComponent);
    }
  }, [componentName, defaultComponent, navigate]);

  const handleComponentClick = (name: string, component: React.FC): void => {
    setSelectedComponent(() => component);
    const formattedName = convertStringSpaceToDash(name);
    navigate(`${PATH.PRACTICE}/${formattedName}`, { replace: true });
  };

  return (
    <>
      <div className="absolute left-0 top-1/2">
        {PRACTICE.map((item, index) => {
          const isActive = selectedComponent === item.component;

          return (
            <div
              key={index}
              onClick={() => handleComponentClick(item.name, item.component)}
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
