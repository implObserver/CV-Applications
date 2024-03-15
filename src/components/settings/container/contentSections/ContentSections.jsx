import '../../../../styles/ContentSections.css';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = () => {
  const personalDetails = PersonalDetails();
  const education = Education();
  const experience = Experience();

  const render = () => {
    return (
      <>
        <div className='content__sections'>
          {personalDetails.render()}
          {education.render()}
          {experience.render()}
        </div>
      </>
    )
  }

  return { render }
};
