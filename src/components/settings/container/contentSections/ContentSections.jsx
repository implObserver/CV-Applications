import '../../../../styles/ContentSections.css';
import { getSectionStateTemplate } from '../../../stateTemplates/DynamicSection';
import { Education } from './education/Education';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = ({ props }) => {
  const education = getSectionStateTemplate();
  const personalDetails = getSectionStateTemplate();

  Object.assign(props.states, { education, personalDetails });
  console.log(props)
  return (
    <>
      <div className='content__sections'>
        <PersonalDetails props={props.states.personalDetails}></PersonalDetails>
        <Education props={props.states.education}></Education>
      </div>
    </>
  )
};
