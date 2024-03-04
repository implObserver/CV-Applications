import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import '../../../../../styles/Education.css'

export const Education = () => {
  const section = EducationSection();
  return (
    <>
      <div className='education'>
        <EducationHead section={section}></EducationHead>
        {section.render}
      </div>
    </>
  );
};