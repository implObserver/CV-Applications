import '../../../../styles/ContentSections.css';
import { getSectionStateTemplate } from '../../../stateTemplates/DynamicSection';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';
import defaultPlaces from '../../../JSON/DefaultPlaces.json'
import { IdealPlace } from '../../../prototypes/contentSection/section/placesWrapper/place/IdealPlace';

export const ContentSections = ({ props }) => {
  const personalDetails = getSectionStateTemplate();
  const education = getSectionStateTemplate();
  const experience = getSectionStateTemplate();

  Object.assign(props.states, { personalDetails, education, experience });

  const educationPlaces = Object.entries(defaultPlaces.education);
  const experiencePlaces = Object.entries(defaultPlaces.experience);

  educationPlaces.forEach(place => {
    Object.assign(props.states.education.places.push(IdealPlace(props.states.education, place[1])));
  })

  experiencePlaces.forEach(place => {
    Object.assign(props.states.experience.places.push(IdealPlace(props.states.experience, place[1])));
  })

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
