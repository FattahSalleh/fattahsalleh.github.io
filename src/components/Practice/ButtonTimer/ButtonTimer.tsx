import { useEffect, useState } from 'react';

export function ButtonTimer() {
  const [count, setCount] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const TIMER_LIMIT = 2;
  const TIMER_INTERVAL = 1000; // 1 second

  const onClick = () => {
    setIsDisabled(true);
  };

  useEffect(() => {
    if (isDisabled) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;

          if (newCount >= TIMER_LIMIT) {
            setIsDisabled(false);
            return 0;
          }

          return newCount;
        });
      }, TIMER_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [isDisabled]);

  return (
    <button
      onClick={onClick}
      className="border-2 p-2 rounded disabled:border-errorRed "
      disabled={isDisabled}
    >
      {isDisabled ? <span>LOADING...</span> : <span>CLICK HERE</span>}
      <br />
      Counter: {count}
    </button>
  );
}
