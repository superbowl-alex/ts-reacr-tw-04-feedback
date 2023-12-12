import { FC } from 'react';
import { Options } from '../App/App';

interface IFeedbackOptions {
  options: (keyof Options)[];
  onLeaveFeedback: (key: keyof Options) => void;
}

const FeedbackOptions: FC<IFeedbackOptions> = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button className='inline-block w-[100px] p-1 border-0 rounded bg-darkBlue text-2xl capitalize transition-all duration-300 mr-2 last:mr-0 hover:scale-[1.1] hover:shadow-xl' key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
};

export default FeedbackOptions;
