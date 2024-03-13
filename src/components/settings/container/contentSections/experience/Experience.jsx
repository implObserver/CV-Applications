import { ExperienceForm } from '../../../../forms/experienceForm/ExperienceForm';
import { ExperienceHead } from './head/ExperienceHead';
import { ExperienceSection } from './section/ExperienceSection';

export const Experience = () => {
  const head = ExperienceHead();
  const section = ExperienceSection();
  const form = ExperienceForm();

  return (
    <>
      <div className='experience'>
        
      </div>
    </>
  );
};
