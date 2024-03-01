import '../../../styles/Container.css';
import { ContentSections } from './contentSections/ContentSections';
import { TemplateLoader } from './templateLoader/TemplateLoader';

export const Container = () => {
  return (
    <>
      <div className='container'>
        <TemplateLoader></TemplateLoader>
        <ContentSections></ContentSections>
      </div>
    </>
  );
};
