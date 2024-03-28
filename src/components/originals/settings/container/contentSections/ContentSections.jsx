import '../../../../../styles/ContentSections.css';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = () => {
  return (
    <>
      <div className='content__sections'>
        <PersonalDetails></PersonalDetails>
        <Education></Education>
        <Experience></Experience>
      </div>
    </>
  )
};
