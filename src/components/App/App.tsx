import { useState } from 'react';
import Statistics from '../Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../NotificationComponent';

export type Options = {
  good: number;
  neutral: number;
  bad: number;
}

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options: Options = { good, neutral, bad };
  const arrayOptions: (keyof Options)[] = Object.keys(options) as (keyof Options)[];

  const handleClick = (option: keyof Options): void => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Invalid type of button');
    }
  };

  const totalCount = (): number => {
    return good + neutral + bad;
  };

  const percentageOfPositiveFeedback = (): number => {
    return Math.round((good * 100) / totalCount());
  };

  return (
    <div className='mx-auto w-[500px] p-8 shadow-md rounded-lg text-2xl text-blue bg-lightBlue'>
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrayOptions} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {totalCount() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={percentageOfPositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
