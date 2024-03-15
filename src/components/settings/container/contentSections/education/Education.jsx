import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { EducationForm } from '../../../../forms/educationForm/EducationForm.jsx';

export const Education = () => {
  const section = EducationSection();
  const form = EducationForm();
  const head = EducationHead();

  const render = () => {
    return (
      <>
        <div className='education'>
          {head.render(section, form)}
          {section.render(form)}
        </div>
      </>
    );
  }

  return { render }
};
