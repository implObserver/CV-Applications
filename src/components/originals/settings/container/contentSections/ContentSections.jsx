import { appModel } from '../../../../../main';
import '../../../../../styles/ContentSections.css';
import { State } from '../../../../prototypes/state/State';
import { Parameters } from '../parameters/Parameters';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';
import defaultPlaces from '../../../../dataManagments/JSON/DefaultPlaces.json'
import { IdealPlace } from '../../../../prototypes/settings/container/contentSection/section/placesWrapper/place/IdealPlace';

export const ContentSections = () => {
  const drawnNode = State('content', 'customize');

  Object.assign(appModel.settings.container.sections.states.drawnNode, drawnNode)

  const personalPlaces = Object.entries(defaultPlaces.personalDetails);
  appModel.settings.container.sections.personalDetails.dropdownLists['personalDetails__places'].objects.activeElement = IdealPlace('personalDetails', 'personalDetails__form', personalPlaces[0][1]);
  return (
    <>
      <div className='content__sections'>
        <PersonalDetails></PersonalDetails>
        <Education></Education>
        <Experience></Experience>
        <Parameters></Parameters>
      </div>
    </>
  )
};