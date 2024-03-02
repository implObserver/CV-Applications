import '../../../../styles/TemplateLoader.css';
import { ClearResume } from './clearResume/ClearResume';
import { LoadExample } from './loadExample/LoadExample';

export const TemplateLoader = () => {
  return (
    <>
      <div className='template__loader'>
        <ClearResume></ClearResume>
        <LoadExample></LoadExample>
      </div>
    </>
  );
};
