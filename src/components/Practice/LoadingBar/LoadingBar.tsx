import { useState, useEffect } from 'react';

export function LoadingBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 25, 100));
    }, 1000);

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
