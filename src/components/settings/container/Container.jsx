import '../../../styles/Container.css';
import { ContentSections } from './contentSections/ContentSections';
import { TemplateLoader } from './templateLoader/TemplateLoader';

export const Container = () => {
  const loader = TemplateLoader();
  const sections = ContentSections();

  const render = () => {
    return (
      <>
        <div className='container'>
          {loader.render()}
          {sections.render()}
        </div>
      </>
    )
  }

  return { render }
};
