import '../../../../../styles/ContentSections.css';
import { Props } from '../../../../dataManagments/props/Global';
import { State } from '../../../../prototypes/state/State';
import { Parameters } from '../parameters/Parameters';
import { Education } from './education/Education';
import { Experience } from './experience/Experience';
import { PersonalDetails } from './personalDetails/PersonalDetails';

export const ContentSections = () => {
  const drawnNode = State('content', 'customize');
  Object.assign(Props.states.sections.states.drawnNode, drawnNode)

  return (
    <>
      <div className='content__sections'>
        {(() => {
          if (drawnNode.getState() === 'content') {
            return (
              <>
                <PersonalDetails></PersonalDetails>
                <Education></Education>
                <Experience></Experience>
              </>
            )
          } else if (drawnNode.getState() === 'customize') {
            return <Parameters></Parameters>
          }
        })()}
      </div>
    </>
  )
};