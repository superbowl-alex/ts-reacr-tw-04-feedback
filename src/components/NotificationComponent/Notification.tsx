import { FC } from 'react';

interface INotification {
  message: string;
}

const Notification: FC<INotification> = ({ message }) => {
  return <div className='text-blue'>{message}</div>;
};

export default Notification;
