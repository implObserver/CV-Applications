import { appModel } from '../../../main';
import '../../../styles/Resume.css';
import { State } from '../../prototypes/state/State';
import { ResumeBody } from './body/Body';
import { ResumeHead } from './head/Head';

export const Resume = () => {
  const props = appModel.resume.styles;
  const layout = State('top__layout__areas');
  const font = State('font__family__sans');
  const update = State();

  Object.assign(appModel.resume.updater, { update: update });
  Object.assign(props.layout, layout);
  Object.assign(props.font, font);

  return (
    <>
      <div className={`resume ${layout.getState()} ${font.getState()}`}>
        <ResumeHead></ResumeHead>
        <ResumeBody></ResumeBody>
      </div>
    </>
  )
}
