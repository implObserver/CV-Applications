import '../../../../../styles/TemplateLoader.css';
import { ClearResume } from './clearResume/ClearResume';
import { LoadExample } from './loadExample/LoadExample';

export const TemplateLoader = (props) => {
    return (
      <>
        <div className='template__loader'>
          <ClearResume props={props}></ClearResume>
          <LoadExample props={props}></LoadExample>
        </div>
      </>
    )
};
