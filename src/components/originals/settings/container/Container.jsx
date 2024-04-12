import '../../../../styles/Container.css';
import { Props } from '../../../dataManagments/props/Global';
import { ContentSections } from './contentSections/ContentSections';
import { TemplateLoader } from './templateLoader/TemplateLoader';

export const Container = () => {
  Props.functions.addDropDownList('sections');
  Props.functions.addDropDownList('parameters');
  return (
    <>
      <div className='container'>
        <TemplateLoader></TemplateLoader>
        <ContentSections></ContentSections>
      </div>
    </>
  )
};
