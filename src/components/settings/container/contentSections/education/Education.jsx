import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import '../../../../../styles/Education.css'
import { EducationForm } from '../../../../forms/educationForm/EducationForm.jsx';

export const Education = () => {
  const form = EducationForm();
  const section = EducationSection(form);

  return (
    <>
      <div className='education'>
        <EducationHead section={section} form={form}></EducationHead>
        {section.render}
      </div>
    </>
  );
};