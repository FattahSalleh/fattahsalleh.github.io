import { useCallback, useState } from 'react';

export function Memoization() {
  const [array, setArray] = useState<number[]>([]);
  const [arraySum, setArraySum] = useState<number>(0);
  const [generationTime, setGenerationTime] = useState<number>(0);
  const [sumTime, setSumTime] = useState<number>(0);

  const generateArray = useCallback((): number[] => {
    const startTime = performance.now();
    const ARRAY_SIZE = 10000000; // Size of the array

    // Generate the array
    const newArray = Array(ARRAY_SIZE)
      .fill(0)
      .map(() => Math.floor(Math.random() * 1000));

    const endTime = performance.now();
    // Calculate time elapsed in milliseconds
    const timeElapsed = endTime - startTime;

    // Log to console for debugging
    console.log(`Array generation took ${timeElapsed.toFixed(2)} ms`);

    // Update the generation time state
    setGenerationTime(timeElapsed);

    return newArray;
  }, []); // Empty dependency array to ensure the function is memoized

  const onClick = () => {
    console.log('Starting array generation...');

    const newArray = generateArray(); // Generate a new array of random numbers
    setArray(newArray); // Update the array state

    // Calculate sum using the new array
    const sumStartTime = performance.now();
    const newSum = newArray.reduce((acc, num) => acc + num, 0);
    const sumEndTime = performance.now();

    console.log(`Sum calculation took ${(sumEndTime - sumStartTime).toFixed(2)} ms`);
    const timeElapsed = sumEndTime - sumStartTime;
    setSumTime(timeElapsed);

    setArraySum(newSum); // Set the sum directly
  };

  return (
    <div className="p-4">
      <button className="border-2 p-2 rounded hover:bg-gray-100" onClick={onClick}>
        CLICK HERE TO GENERATE ARRAY
      </button>

      <div className="mt-4">
        <div>Sum of array: {arraySum}</div>
        <div>Array generation time: {generationTime.toFixed(2)} ms</div>
        <div>Array summation time: {sumTime.toFixed(2)} ms</div>
        <div>Array length: {array.length}</div>
      </div>
    </div>
  );
}
