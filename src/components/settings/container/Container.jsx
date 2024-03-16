import '../../../styles/Container.css';
import { ContentSections } from './contentSections/ContentSections';
import { TemplateLoader } from './templateLoader/TemplateLoader';

export const Container = ({ props }) => {
  return (
    <>
      <div className='container'>
        <TemplateLoader props={props}></TemplateLoader>
        <ContentSections props={props}></ContentSections>
      </div>
    </>
  )
};
