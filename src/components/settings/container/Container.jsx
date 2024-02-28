import '../../../styles/Container.css';
import { PersonalForms } from './personalForms/PersonalForms';
import { TemplateLoader } from './templateLoader/TemplateLoader';

export const Container = () => {
  return (
    <>
      <div className='container'>
        <TemplateLoader></TemplateLoader>
        <PersonalForms></PersonalForms>
      </div>
    </>
  );
};
