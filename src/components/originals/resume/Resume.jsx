import '../../../styles/Resume.css';
import { ResumeBody } from './body/Body';
import { ResumeHead } from './head/Head';

export const Resume = () => {
  return (
    <>
      <div className='resume'>
        <ResumeHead></ResumeHead>
        <ResumeBody></ResumeBody>
      </div>
    </>
  )
}
