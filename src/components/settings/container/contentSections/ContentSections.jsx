import '../../../../styles/ContentSections.css';
import { getSectionStateTemplate } from '../../../stateTemplates/DynamicSection';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = ({ props }) => {
  const personalDetails = getSectionStateTemplate();
  const education = getSectionStateTemplate();
  const experience = getSectionStateTemplate();

  Object.assign(props.states, { personalDetails, education, experience });
  console.log(props)
  return (
    <>
      <div className='content__sections'>
        <PersonalDetails props={props.states.personalDetails}></PersonalDetails>
        <Education props={props.states.education}></Education>
        <Experience props={props.states.experience}></Experience>
      </div>
    </>
  )
};
