import { appModel } from '../../../../../main';
import '../../../../../styles/ContentSections.css';
import { Context } from '../../../../dataManagments/context/Context';
import { Parameters } from '../parameters/Parameters';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = () => {
  return (
    <>
      <div className='content__sections'>
        <Context.Provider value={appModel.settings.container}>
          <PersonalDetails></PersonalDetails>
          <Education></Education>
          <Experience></Experience>
          <Parameters></Parameters>
        </Context.Provider>
      </div>
    </>
  )
};