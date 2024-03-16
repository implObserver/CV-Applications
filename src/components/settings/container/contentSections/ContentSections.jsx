import '../../../../styles/ContentSections.css';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = ({ props }) => {
  //const education = Education();
  // const experience = Experience();

  return (
    <>
      <div className='content__sections'>
        <PersonalDetails props={props}></PersonalDetails>
        <Education props={props}></Education>
      </div>
    </>
  )
};
