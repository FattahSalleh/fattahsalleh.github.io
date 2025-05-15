import React, { useEffect, useState } from 'react';

export function ButtonTimer() {
  const [count, setCount] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const TIMER_LIMIT = 3; // 3 seconds
  const TIMER_INTERVAL = 1000; // 1000ms / 1 second

  const handleClick = () => {
    setIsDisabled(true);
  };

  useEffect(() => {
    if (isDisabled) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount >= TIMER_LIMIT) {
            setIsDisabled(false);
            return 1;
          }
          return newCount;
        });
      }, TIMER_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [isDisabled]);

  return (
    <div>
      <button disabled={isDisabled} onClick={handleClick}>
        {isDisabled ? <span>Loading {count}</span> : <span>ButtonTimer</span>}
      </button>
    </div>
  );
}
