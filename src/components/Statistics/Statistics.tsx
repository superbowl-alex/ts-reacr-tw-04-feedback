import { FC } from 'react';

interface IStatistics {
  good: number;
  neutral: number;
  bad: number;
  total: () => number;
  positivePercentage: () => number;
}

const Statistics: FC<IStatistics> = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className='w-[400px] p-4 border-0 rounded-lg shadow-md'>
      <li className='mb-2'>Good: {good}</li>
      <li className='mb-2'>Neutral: {neutral}</li>
      <li className='mb-2'>Bad: {bad}</li>
      <li className='mb-2'>Total: {total()}</li>
      <li>Positive feedback: {positivePercentage()}%</li>
    </ul>
  );
};

export default Statistics;
