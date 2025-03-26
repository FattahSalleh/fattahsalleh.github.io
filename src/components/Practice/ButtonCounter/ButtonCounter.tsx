import { memo, useState } from 'react';

const CountNum = ({ count }: { count: number }) => {
  return <span>Count: {count}</span>;
};

const MemoComponent = memo(() => {
  return <div>MEMO</div>;
});

export function ButtonCounter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        <CountNum count={count} />
        <MemoComponent />
      </button>
    </div>
  );
}
