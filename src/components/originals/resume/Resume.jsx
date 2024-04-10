import '../../../styles/Resume.css';
import { Props } from '../../dataManagments/props/Global';
import { State } from '../../prototypes/state/State';
import { ResumeBody } from './body/Body';
import { ResumeHead } from './head/Head';

export const Resume = () => {
  const layout = State('top__layout__areas');
  const font = State('font__family__sans');

  Object.assign(Props.states.resumeUpdater, { resumeLayout: layout });
  Object.assign(Props.states.resumeUpdater, { resumeFont: font });

  return (
    <>
      <div className={`resume ${layout.getState()} ${font.getState()}`}>
        <ResumeHead></ResumeHead>
        <ResumeBody></ResumeBody>
      </div>
    </>
  )
}
