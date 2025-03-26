import { useState, useEffect } from 'react';

export function LoadingBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? prevProgress : prevProgress + 25));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Loading Bar
      <div>
        <progress value={progress} max={100}></progress>
      </div>
    </div>
  );
}
