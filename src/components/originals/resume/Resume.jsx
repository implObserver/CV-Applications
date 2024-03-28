import '../../../styles/Resume.css';
import { ResumeBody } from './body/Body';
import { ResumeHead } from './head/Head';

export const Resume = ({ props }) => {
  return (
    <>
      <div className='resume'>
        <ResumeHead props={props}></ResumeHead>
        <ResumeBody props={props}></ResumeBody>
      </div>
    </>
  )
}
