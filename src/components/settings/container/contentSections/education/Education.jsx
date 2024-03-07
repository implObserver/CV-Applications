import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { EducationForm } from '../../../../forms/educationForm/EducationForm.jsx';

export const Education = () => {
  const form = EducationForm();
  const section = EducationSection(form);
  const head = EducationHead({ section, form });

  return (
    <>
      <div className='education'>
        {head.render}
        {section.render}
      </div>
    </>
  );
};