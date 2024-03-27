import '../../../../styles/ContentSections.css';
import { getSectionStateTemplate } from '../../../stateTemplates/DynamicSection';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';
import defaultPlaces from '../../../JSON/DefaultPlaces.json'
import { IdealPlace } from '../../../prototypes/contentSection/section/placesWrapper/place/IdealPlace';

export const ContentSections = ({ props }) => {
  const personalDetails = getSectionStateTemplate('personal');
  const education = getSectionStateTemplate('education');
  const experience = getSectionStateTemplate('experience');

  Object.assign(props.states, { personalDetails, education, experience });

  const personalPlaces = Object.entries(defaultPlaces.personal);
  const educationPlaces = Object.entries(defaultPlaces.education);
  const experiencePlaces = Object.entries(defaultPlaces.experience);
  console.log(personalPlaces[0][1])

  props.states.personalDetails.activePlace = IdealPlace(props.states.personalDetails, personalPlaces[0][1]);

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
