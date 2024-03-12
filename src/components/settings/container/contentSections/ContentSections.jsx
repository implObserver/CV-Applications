import '../../../../styles/ContentSections.css';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = () => {
  const personalDetails = PersonalDetails();

  return (
    <>
      <div className='content__sections'>
        {personalDetails.render()}
        <Education></Education>
        <Experience></Experience>
      </div>
    </>
  );
};
