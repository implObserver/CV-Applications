import { appModel } from '../../../main';
import '../../../styles/Resume.css';
import { State } from '../../prototypes/state/State';
import { ResumeBody } from './body/Body';
import { ResumeHead } from './head/Head';

export const Resume = () => {
  const layout = State('top__layout__areas');
  const font = State('font__family__sans');

  Object.assign(appModel.resume.styles.layout, layout);
  Object.assign(appModel.resume.styles.font, font);
  console.log(appModel)

  return (
    <>
      <div className={`resume ${layout.getState()} ${font.getState()}`}>
        <ResumeHead></ResumeHead>
        <ResumeBody></ResumeBody>
      </div>
    </>
  )
}
