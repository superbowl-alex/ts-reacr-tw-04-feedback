import { FC, ReactNode  } from 'react';

interface ISection {
  title: string;
  children: ReactNode ;
}

const Section: FC<ISection> = ({ title, children }) => {
  return (
    <section className='p-4'>
      <h2 className='mb-4 text-deepBlue font-heading font-bold text-3xl leading-[1.125] tracking-[3px]'>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
